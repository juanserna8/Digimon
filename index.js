const addButton = document.querySelector('#addButton');
let initialNumberCont = document.querySelector('#initialNumberCont');
initialNumber = initialNumberCont.textContent;

addButton.addEventListener("click", () => {
    //initialNumberCont.innerHTML = initialNumber++;
    if(localStorage.initialNumber) {
        localStorage.initialNumber = Number(localStorage.initialNumber)+1; 
    } else {
        localStorage.initialNumber = 0;
    }
    initialNumberCont.innerHTML = localStorage.initialNumber;
});

