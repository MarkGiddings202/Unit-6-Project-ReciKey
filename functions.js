// Functions
const removeChildren= (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

const createButton = async (index, button, meals) => {
    button.setAttribute("type", "button");
    button.setAttribute("value", "Recipe");
    button.id = meals[index].idMeal

    button.className = "Recipe-Search-Btn"
    button.addEventListener("click", async () => {
        const fetching = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[index].idMeal}`)
        const parsedMealField = await fetching.json()

        mealDetailsContent.style.display = "block"
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only
        recipeInstructions.innerText = `${parsedMealField.meals[0].strInstructions}`
        recipeTitle.innerText = meals[index].strMeal
        recipeImg.src = `${parsedMealField.meals[0].strMealThumb}`
        recipeLink.href = `${parsedMealField.meals[0].strYoutube}`
    });
}

const createMealCards = async (meals) => {
    for (let i = 0; i < meals.length; i++) {
        const card = document.createElement("div")
        card.id = "card"
        card.setAttribute("class", "animate__animated animate__fadeInUp")
        const mealHeading = document.createElement("h2");
        mealHeading.className= "Meal-Card-Title"
        const mealImg = document.createElement("img")
        mealImg.id = "meal-Img"

        const btn = document.createElement("INPUT");
        createButton(i, btn, meals);

        ///  apend elements 
        mealSearchResults.appendChild(card) // parent div meal
        card.appendChild(mealImg)
        card.appendChild(mealHeading)
        card.appendChild(btn)
        mealHeading.innerText = meals[i].strMeal;

        const img = await getMealImg(meals[i].idMeal)

        // style for images
        mealImg.src = img
        mealImg.width = "200"
        mealImg.height = "200"
    }
}

async function getMealImg(link) {
    const recepiceFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${link}`)
    const recepicejson = await recepiceFetch.json()
    return recepicejson.meals[0].strMealThumb
}

async function fetchingMealByIngredient(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const json = await response.json();

    if (!json.meals) {
        removeChildren(mealSearchResults);

        resultsTitle.innerText = "No meals found...";
    } else {
        removeChildren(mealSearchResults);

        createMealCards(json.meals)
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

    removeChildren(mealSearchResults);

    createMealCards(json.meals);
}

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
breakfastOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
dessertOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
seafoodOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
beefOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
lambOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
pastaOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
porkOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
chickenOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
sideOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
goatOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
vegetarianOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})
starterOptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.path[0].innerText;

    listMealsByCategory(category)
})

// recipe card function 
span.onclick = function () {
    mealDetailsContent.style.display = "none";
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}