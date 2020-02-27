'use strict';
let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');
const changeCategoryForm = document.querySelector('#changeCategoryForm');
const closeModalButton = document.querySelector('#closeModal');

const getQuote = async category => {
    const chuckSaysParagraph = document.querySelector('#chuckSays');
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const modalWindow = document.querySelector(".modal-overlay");

    const theQuote = await getWithAwait(apiUrl);
    chuckSaysParagraph.innerHTML = theQuote.value;
    modalWindow.classList.toggle('open');
}


const getCategories = async () => {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    const categorySelectLabel = document.querySelector('#categorySelectLabel')

    const categoryList = await getWithAwait(apiUrl);

    const categoryElement = document.createElement('select');
        // Create the options for the select element. 
        categoryList.map(function (category) {
            const categoryOption = document.createElement('option')
            categoryOption.value = category;
            categoryOption.text = category;
            categoryElement.appendChild(categoryOption)
        });
        categorySelectLabel.appendChild(categoryElement);
};

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

closeModalButton.addEventListener('click', function (e) {
    e.preventDefault();
    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
});

getQuote(category);
getCategories();

getWithAwait('https://api.chucknorris.io/jokes/random?category=dev');