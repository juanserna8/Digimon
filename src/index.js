const addButton = document.querySelector('#addButton');
let initialNumberCont = document.querySelector('#initialNumberCont');
initialNumber = initialNumberCont.textContent;
initialNumberCont.innerText = localStorage.initialNumber;

addButton.addEventListener("click", () => {
    //initialNumberCont.innerHTML = initialNumber++;
    if(localStorage.initialNumber) {
        localStorage.initialNumber = Number(localStorage.initialNumber)+1; 
    } else {
        localStorage.initialNumber = 0;
    }
    initialNumberCont.innerText = localStorage.initialNumber;
});