// Functions

async function fetchingMealByIngredient(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const json = await response.json();

    // if(!json.meals) console.log("There are no meals for this ingredient")
    // !json.meals ? console.log("There are no meals for this ingredient."): console.log(json);
    if (!json.meals) {
        console.log("There are no meals for this ingredient")
    } else {
        console.log(json);
        for (let i = 0; i < json.meals.length; i++) {
            const card = document.createElement("div")
            const mealHeading = document.createElement("h2");
            const mealImg= document .createElement("img")
            ///  apend elements 
            mealSearchResults.appendChild(card) // parent div meal
            card.appendChild(mealImg)
            card.appendChild(mealHeading)
            mealHeading.innerText = json.meals[i].strMeal;
           
            /// fecth for recepi 
            const recepiceFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${json.meals[i].idMeal}`)
            const recepicejson = await recepiceFetch.json()
            
            // style for images
            mealImg.src = recepicejson.meals[0].strMealThumb
            mealImg.width ="200"
            mealImg.height ="200"
            mealImg.id = "babab"


            // const mealHeading = document.createElement("h2");
            // mealSearchResults.after(mealHeading);
            // mealHeading.innerText = json.meals[i].strMeal;
        }
    }
}

// fetchingMealByIngredient("chicken breast")

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = searchInput.value;
    if (userInput) {
        fetchingMealByIngredient(userInput);
    }
});