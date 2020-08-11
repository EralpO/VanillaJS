const search = document.getElementById('search'),
 submit = document.getElementById('submit'),
 random = document.getElementById('random'),
 meals = document.getElementById('meals'),
 resultHeading = document.getElementById('result-heading'),
 singleMeal = document.getElementById('single-meal')




//Search meal and fetch from API
function searchMeal(e){
   e.preventDefault();

   singleMeal.innerHTML = "";

   const term = search.value;
   console.log(term)
}



 submit.addEventListener('submit',searchMeal)