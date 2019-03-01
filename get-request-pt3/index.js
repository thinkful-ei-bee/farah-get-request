'use strict';
/* global $ */

function getDogImage(breedInput) {
  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong'));
}

function displayResults(responseJson){
  console.log(responseJson); 
  //const dogArray = responseJson.message.map(pic => `<img src="${pic}" class="results-img">`);

  const randomDogBreed = `<img src="${responseJson.message}" class="results-img">`;
  $('.results').html(randomDogBreed);
}
  


// EVENT LISTENER FOR FORM
function handleForm(){
  $('form').submit(event => {
    console.log('button ran');
    let userInput = $('.js-dog-images-entry').val();
    /*let defaultNum = 3;
    
    if (typeof userInput === 'number') {
      defaultNum = userInput;
    } */
    $('.js-dog-images-entry').val('');
    event.preventDefault();
    getDogImage(userInput);
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  handleForm();
  
});