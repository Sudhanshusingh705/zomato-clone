import {loadRandom, appendRecipe} from './recipeOperations.js';

async function loadRandomDish() {
    let data = await loadRandom("chicken");
    console.log(data);
    appendRecipe(data, document.querySelector("#recipe-container"));
}

loadRandomDish();    