const removeChilds = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };
  
  // clean up code , camelCase.
  async function FetchingCocktailByName(input) {
    let cocktailApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    let cocktailResponse = await fetch(cocktailApi);
    removeChilds(cocktailDiv);
  
    let cocktailJson = await cocktailResponse.json();
  
    if (!cocktailJson.drinks) {
      cocktailH2.innerText = `There are no drinks named ${input}`;
      return false;
    }
    cocktailH2.innerText = `Your Search Results:`;
  
    cocktailJson.drinks.forEach((drinks) => {
      //create elements
      const cocktailCard = document.createElement("div");
      //cocktail name
      const cocktailHeader = document.createElement("h2");
      //cocktail image
      const cocktailImg = document.createElement("img");
      //cocktail P
      const cocktailIngredients = document.createElement("ul");
      cocktailIngredients.classList.add("description");
      // styling 
      cocktailCard.classList.add("cocktailCard");
      cocktailHeader.classList.add("cocktailHeader");
      cocktailImg.classList.add("cocktailImg");
      cocktailIngredients.classList.add("cocktailIngredients")
      //appends to Elements
      cocktailDiv.append(cocktailCard);
      cocktailCard.appendChild(cocktailHeader);
      cocktailCard.appendChild(cocktailImg);
      cocktailCard.appendChild(cocktailIngredients);
      //loading data onto elements
      cocktailHeader.textContent = drinks.strDrink;
      cocktailImg.src = drinks.strDrinkThumb;
      cocktailImg.width = "200";
      cocktailImg.height = "200";
      cocktailImg.id = drinks.idDrink;
      //cocktail descriptions
       const list = [
        drinks.strIngredient1,
        drinks.strIngredient2,
        drinks.strIngredient3,
        drinks.strIngredient4,
        drinks.strIngredient5,
       ];
       cocktailIngredients.innerHTML = list.map((item)=> {
        if(!item) return;
        return `<li>${item}</li>`;
       }).join('')
    //   innerText = `${drinks.strIngredient1 +', '+ drinks.strIngredient2 +', '+ drinks.strIngredient3}`;
  
    });
  }
  // EventListener for button
  userBtn.addEventListener("click", (e) => {
    e.preventDefault();
    FetchingCocktailByName(userInput.value);
  });
  
  // Invoking function
  FetchingCocktailByName("");