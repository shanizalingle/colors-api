import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RandomColor from './js/colors-api.js';

//Business Logic

export function getRandomColor() {
  let promise = RandomColor.getRandomColor();
  promise.then(function(color) {
    console.log(color);
    printColor(color);
  }, function (error) {
    printError(error);
  });
}

//UI Logic

function printColor(color) {
  document.querySelector("#showResponse").innerText = `Your random color is ${color[0]['hex']} ${color[0][`rgb`]} ${color[0][`hsl`]}`;
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `There was an error processing the color data for ${error}: ${error.status} ${error.statusText}: ${error.message};`
}

function handleSubmission(event) {
  event.preventDefault();
  getRandomColor();
}

window.addEventListener("load", function() {
  this.document.querySelector("#submitform").addEventListener("submit", handleSubmission);
})