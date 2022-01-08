const addButton = document.querySelector('#addButton');
let initialNumberCont = document.querySelector('#initialNumberCont');
initialNumber = initialNumberCont.textContent;

addButton.addEventListener("click", () => {
    initialNumberCont.innerHTML = initialNumber++;
});

