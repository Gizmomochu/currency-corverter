let buttonElement = document.querySelector(".js-buttonCount");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");
let currenyElement = document.querySelector(".js-currency");



buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    if (currenyElement.value === "EUR") {
        resultElement.innerText = (amountElement.value / 4.56).toFixed(2) + " euro ";
    }
    if (currenyElement.value === "USD") {
            resultElement.innerText = (amountElement.value / 3.79).toFixed(2) + " dolarów ";
    } 
    if (currenyElement.value === "BTC") {
        resultElement.innerText = (amountElement.value / 215647.05).toFixed(10) + " BTC ";
    };
});