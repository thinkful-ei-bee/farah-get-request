'use strict';
/* global $ */

function getDogImage(defaultNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${defaultNum}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

/*/USER INPUT # OF IMAGES
function numberOfImages(num){
  console.log(`Retrieving ${num} dog pictures.`);
  STORE.push(num, getDogImage());
} */

function displayResults(responseJson){
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
} 

// EVENT LISTENER FOR FORM
function handleForm(){
  $('form').submit(event => {
    console.log('button ran');
    let defaultNum = 3;
    let userInput = $('.js-dog-images-entry').val();
    if (typeof userInput === 'number') {
      defaultNum = userInput;
    }
    $('.js-dog-images-entry').val('');
    event.preventDefault();
    getDogImage(userInput);
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  handleForm();
  
});
