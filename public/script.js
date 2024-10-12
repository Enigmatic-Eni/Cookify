let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn")
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
    let userInp = document.getElementById("user-inp").value;
if(userInp.length == 0){
    result.innerHTML = `<p> Input Field Cannot be Empty </p>`
}
else{
    fetch(url + userInp).then((response) => response.json()).then((data) =>{
        let myMeal = data.meals[0]
        // console.log(data)
        // console.log(myMeal)
        // console.log(myMeal.strMealThumb);
        // console.log(myMeal.strArea)
        // console.log(myMeal.strMeal)
        // console.log(myMeal.strInstructions)
        let count = 1;
        let ingredients = [];
        for (let i in myMeal){
            let ingredient = "";
            let measure = ""
            if (i.startsWith("strIngredient") && myMeal[i]){
                ingredient = myMeal[i];
                measure = myMeal[`strMeasure` + count];
                count += 1;
                ingredients.push(`${measure} ${ingredient}`)
                // console.log(ingredient, measure);
            }
        }
        // console.log(ingredients)
    
        result.innerHTML = `
        <img src=${myMeal.strMealThumb} class=" w-32 m-auto">
        <div class=" ">
        <div class="details bg-cyan-300 relative mt-[-1em] text-center py-3">
            <h2 class=" font-bold">${myMeal.strMeal}</h2>
            <h4 class="  text-xs">${myMeal.strArea}</h4>
        </div>
        <div id="ingredient-con"></div>
        <div id="recipe" class=" absolute bg-white min-h-full w-full top-0 left-0 z-10 rounded-lg hidden">
        <button id="hide-recipe" class=" text-[1em] relative w-[1.8em] h-[1.8em] bg-cyan-300 top-[1.2em] left-[90%] rounded-sm mb-2">X</button>
        <pre id="instructions" class="whitespace-pre-wrap break-words p-4" > ${myMeal.strInstructions}</pre>
        </div>
        <button id="show-recipe" class=" bg-cyan-300 mt-5 py-3 px-4">View Recipe</button>
        </div>
        `;
         let ingredientsCon = document.getElementById("ingredient-con");
         let parent = document.createElement("ul");
         let recipe = document.getElementById("recipe");
         let hideRecipe = document.getElementById("hide-recipe");
         let showRecipe = document.getElementById("show-recipe");
    
         ingredients.forEach((i) =>{
            let child = document.createElement("li");
            child.innerHTML = i;
            parent.appendChild(child);
            ingredientsCon.appendChild(parent)
         })
    
         hideRecipe.addEventListener('click', () => {
            recipe.style.display = "none";
         });
         showRecipe.addEventListener("click", () => {
            recipe.style.display = "block";
         })
    
    }).catch(() => {
        result.innerHTML = `<p>Invalid Input</p>`
    })
}
})

