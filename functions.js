// Functions

async function getMealImg (link){
    const recepiceFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${link}`)
    const recepicejson = await recepiceFetch.json()
    return recepicejson.meals[0].strMealThumb

}

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
            card.id ="card"
            const mealHeading = document.createElement("h2");
            const mealImg= document.createElement("img")
            mealImg.id = "meal-Img"


            
            ///  apend elements 
            mealSearchResults.appendChild(card) // parent div meal
            card.appendChild(mealImg)
            card.appendChild(mealHeading)
            mealHeading.innerText = json.meals[i].strMeal;
            console.log(json.meals[i])


           const img = await getMealImg(json.meals[i].idMeal)
            
            // style for images
            mealImg.src = img
            mealImg.width = "200"
            mealImg.height ="200"
        
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