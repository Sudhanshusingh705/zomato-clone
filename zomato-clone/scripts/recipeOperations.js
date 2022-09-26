async function searchRecipes(search) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        let data = await res.json();
        return data.meals;
    } catch(err) {
        console.log(err);
    }
}

function appendRecipes(data, location) {
    location.textContent = "";
    data.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.strMealThumb;
        let innerDiv = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.textContent = element.strMeal;
        let tagsDiv = document.createElement("div");
        let pArea = document.createElement("p");
        pArea.textContent = element.strArea;
        let pLocation = document.createElement("p");
        pLocation.textContent = element.strCategory;
        tagsDiv.append(pArea, pLocation);
        let a = document.createElement("a");
        a.href = element.strYoutube;
        a.textContent = "Watch on Youtube";
        a.setAttribute("target", "_blank");
        innerDiv.append(h3, tagsDiv, a);
        div.append(img, innerDiv);
        location.append(div);
    });
}

async function loadRandom() {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        let data = await res.json();
        return data.meals;
    } catch(err) {
        console.log(err);
    }
}

function appendRecipe(data, location) {
    location.textContent = "";
    data.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.strMealThumb;
        let innerDiv = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = element.strMeal;
        let tagsDiv = document.createElement("div");
        let pArea = document.createElement("p");
        pArea.textContent = element.strArea;
        let pLocation = document.createElement("p");
        pLocation.textContent = element.strCategory;
        tagsDiv.append(pArea, pLocation);
        let pIngredients = document.createElement("p");
        pIngredients.textContent = element.strMeasure1 + " " + element.strIngredient1 + ", " + element.strMeasure2 + " " + element.strIngredient2 + ", " + element.strMeasure3 + " " + element.strIngredient3 + ", " + element.strMeasure4 + " " + element.strIngredient4 + ", " + element.strMeasure5 + " " + element.strIngredient5;
        let pInstructions = document.createElement("p");
        pInstructions.textContent = element.strInstructions;
        let iframe = document.createElement("iframe");
        let arr = element.strYoutube.split("v=");
        iframe.src = "https://www.youtube.com/embed/"+arr[1];
        iframe.setAttribute("width", "560");
        iframe.setAttribute("height", "315");
        innerDiv.append(h2, tagsDiv, pIngredients, pInstructions, iframe);
        div.append(img, innerDiv);
        location.append(div);
    });
}

export {searchRecipes, appendRecipes, loadRandom, appendRecipe}

