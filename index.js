'use strict';
/* global $ */

function getDogImage(defaultNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${defaultNum}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson){
  console.log(responseJson); 

  // map through responseJson.message and assign the img html to each pic
  const dogArray = responseJson.message.map(pic => `<img src="${pic}" class="results-img">`);

  //replace entire results section with string from dogArray
  $('.results').html(dogArray.join(''));
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