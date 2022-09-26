import {searchRecipes, appendRecipes} from './recipeOperations.js';

async function loadDefault() {
    let data = await searchRecipes("chicken");
    appendRecipes(data, document.querySelector("#recipes-container"));
}

loadDefault();    