'use strict';
/* global $ */

const STORE = {
  repos: [],
};

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

// EVENT LISTENER FOR FORM
function handleForm(){
  $('form').submit(event => {
    console.log('button ran');
    event.preventDefault();
    getDogImage();
  });
}

function main() {
  console.log('App loaded! Waiting for submit!');
  handleForm();
}
$(main);
