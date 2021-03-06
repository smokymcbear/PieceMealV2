export const createSearchAction = (recipe) => {
    return {type: 'SEARCH_RECIPE', payload: fetchRecipe(recipe)};
};

function fetchRecipe(recipe) {
    const promise1 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${recipe}`, {
        method: 'get',
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    const promise2 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/ingredients?text=${recipe}`, {
        method: 'get',
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    const both = Promise.all([promise1, promise2]);

    return both.then(([recipesResults, ingredientsResults]) => {
        return {recipes: recipesResults.recipes, ingredients: ingredientsResults.ingredients};
    });
}

export const selectIngredient = (ingredientId) => {
    return {type: 'SELECT_INGREDIENT', payload: ingredientId};
};

export const getIngredients = () => {
    return {type: 'GET_INGREDIENT_RESULTS', payload: fetchIngredients()};
};

function fetchIngredients() {
    return fetch(`https://piecemeal-api.herokuapp.com/api/v1/ingredients`).then(res => res.json());
}
