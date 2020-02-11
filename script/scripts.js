'use strict';
let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');
const changeCategoryForm = document.querySelector('#changeCategoryForm');

function getQuote(category) {
    const chuckSaysParagraph = document.querySelector('#chuckSays');
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(apiUrl).then(function (response) {
        chuckSaysParagraph.innerHTML = response.value;
    });
}


function getCategories() {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    const categorySelectLabel = document.querySelector('#categorySelectLabel')

    get(apiUrl).then(function (response) {
        const categoryList = response.filter(function (category) {
            if (category != 'explicit') {
                return category
            }
        });
        // Create a select element for our categories. 
        const categoryElement = document.createElement('select');
        // Create the options for the select element. 
        categoryList.map(function(category){
            const categoryOption = document.createElement('option')
            categoryOption.value = category;
            categoryOption.text = category;
            categoryElement.appendChild(categoryOption)
        });
        categorySelectLabel.appendChild(categoryElement);
    });
}

refreshQuoteButton.addEventListener('click', function (e) {
    e.preventDefault();
    getQuote(category);
});



newQuoteButton.addEventListener('click', function (e) {
    e.preventDefault();
    const selectValue = document.querySelector('select').value
    let category = selectValue;
    getQuote(category)
});

getQuote(category);
getCategories();