// Functions

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

async function fetchingMealByIngredient(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const json = await response.json();

    // if(!json.meals) console.log("There are no meals for this ingredient")
    // !json.meals ? console.log("There are no meals for this ingredient."): console.log(json);
    if (!json.meals) {
        console.log("There are no meals for this ingredient");
    } else {
        console.log(json.meals);
    }
}

async function listMealsByCategory(category) {
    const categories = {
        Beef: "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef",
        Chicken: "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken",
        Dessert: "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert",
        Lamb: "https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb",
        Miscellaneous: "https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous",
        Pasta: "https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta",
        Pork: "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork",
        Seafood: "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood",
        Side: "https://www.themealdb.com/api/json/v1/1/filter.php?c=side",
        Starter: "https://www.themealdb.com/api/json/v1/1/filter.php?c=starter",
        Vegan: "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan",
        Vegetarian: "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian",
        Breakfast: "https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast",
        Goat: "https://www.themealdb.com/api/json/v1/1/filter.php?c=goat"
    }

    const categoryEnpoint = categories[category];

    const response = await fetch(`${categoryEnpoint}`);
    const json = await response.json();

    const mealResult = document.getElementById("meal");

    removeChilds(mealResult);

    for (let i = 0; i < json.meals.length; i++) {
        const newMeal = document.createElement("h3");

        mealResult.appendChild(newMeal);
        newMeal.innerText = json.meals[i].strMeal;
    }
}

// fetchingMealByIngredient("chicken breast")

//Event listeners
searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = searchInput.value;
    if (userInput) {
        fetchingMealByIngredient(userInput);
    }
});

veganOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})