// Functions

async function fetchingMealByIngredient(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const json = await response.json();

        // if(!json.meals) console.log("There are no meals for this ingredient")
        json.meals ? resultsTitle.innerText = "Your Search Results:": console.log(json);

        !json.meals ? resultsTitle.innerText = "No Results Found...": console.log(json);
}

// fetchingMealByIngredient("chicken breast")

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = searchInput.value;
    if(userInput) {
        fetchingMealByIngredient(userInput);
    }
});