// console.log("Assalomu alaykum");
const elBtns = document.querySelector(".btn-group");
const elHeading = document.querySelector(".js-heading");
const elInput = document.querySelector(".js-input");
const elForm = document.querySelector(".js-form");
const elPositive = document.querySelector(".btn-positive");
const elNegative = document.querySelector(".btn-negative");
const elNeutral = document.querySelector(".btn-neutral");

function myFunc(elInput,node) {
    

    if(elInput.value == 1){
        node.textContent = "Positive content"; 
    }
    if(elInput.value == 2){
        node.textContent = "Negative content";
    }
    if(elInput.value == 3){
        node.textContent = "Neutral content"; 
    }
    if(elInput.value > 3){
       alert("index is invalid")
    elInput.value = ""
    }
        elInput.value =""
}
myFunc(elInput,elHeading)

elForm.addEventListener("click", (evt) => {
    elInput.innerHTML =""
    myFunc(elInput,elHeading)
  if (evt.target.matches(".btn-positive")) {
    elHeading.textContent = "Positive content";
    elPositive.classList.add("active")
  }else{
    elPositive.classList.remove("active")
  }
  if (evt.target.matches(".btn-negative")) {
    elHeading.textContent = "Negative content";
    elNegative.classList.add("active")
  }else{
    elNegative.classList.remove("active")
  }
  if (evt.target.matches(".btn-neutral")) {
    elHeading.textContent = "Neutral content";
    elNeutral.classList.add("active")
  }else{
    elNeutral.classList.remove("active")
  }
});

