'use strict';
let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');

function getQuote(category) {
    const chuckSaysParagraph = document.querySelector('#chuckSays');
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(apiUrl).then(function (response) {
        chuckSaysParagraph.innerHTML = response.value;
    });
}

refreshQuoteButton.addEventListener('click', function(e) {
    e.preventDefault();
    getQuote(category);
});


// myInput.addEventListener('input',function (e) {
//     const inputValue = document.querySelector('#myInput')
//     category = inputValue.value;
//     getQuote(category)
// });

newQuoteButton.addEventListener('click', function(e) {
    e.preventDefault();
    const inputValue = document.querySelector('#myInput').value
    let category = inputValue;
    getQuote(category)
});

  getQuote(category);