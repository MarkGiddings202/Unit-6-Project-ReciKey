// Functions

async function fetchingMealByIngredient(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const json = await response.json();

        // if(!json.meals) console.log("There are no meals for this ingredient")
        // !json.meals ? console.log("There are no meals for this ingredient."): console.log(json);
        if(!json.meals) {
            console.log("There are no meals for this ingredient");
        } else {
            
        }
}

// fetchingMealByIngredient("chicken breast")

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = searchInput.value;
    if(userInput) {
        fetchingMealByIngredient(userInput);
    }
});

