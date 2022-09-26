    import {searchRecipes, appendRecipes} from './recipeOperations.js';

    var timerId;
    
    
    var searchInput = document.querySelector("#search-input");
    searchInput.addEventListener("keyup", function() {
        debounce(searchTheInput, 1000);
    });

    async function searchTheInput() {
        if(searchInput.value == "")
            return;
        let data = await searchRecipes(searchInput.value);
        appendRecipes(data, document.querySelector("#recipes-container"));
    }

    function debounce(func, delay) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function () {
            func();
        }, delay);
    }

    async function loadDefault() {
        let data = await searchRecipes("chicken");
        appendRecipes(data, document.querySelector("#recipes-container"));
    }

    loadDefault();    