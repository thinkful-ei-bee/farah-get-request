'use strict';
/*global $*/

function getDogImage(breedInput) {
  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong.'));
}

function displayResults(responseJson){
  console.log(responseJson); 
  if (responseJson.status === 'error') {
    alert('Can\'t find dog breed.');
  }
  else {
    const randomDogBreed = `<img src="${responseJson.message}" class="results-img">`;
    $('.results').html(randomDogBreed);
  }
}

// EVENT LISTENER FOR FORM
function handleForm(){
  $('form').submit(event => {
    event.preventDefault();
    console.log('button ran');
    let userInput = $('.js-dog-images-entry').val();
    $('.js-dog-images-entry').val('');
    
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleForm();
});