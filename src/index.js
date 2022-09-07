import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RandomColor from './js/colors-api.js';
import AllCharacters from './js/ricknmorty-api.js';

//Business Logic

function getRandomColor() {
  let promise = RandomColor.getRandomColor();
  promise.then(function(color) {
    printColor(color);
  }, function (error) {
    printError(error);
  });
}

function getAllCharacters() {
  let promise = AllCharacters.getAllCharacters();
  promise.then(function(character) {
    printCharacter(character);
  }, function (error) {
    printError(error);
  });
}

function getRandomRick() {
const ricks = [1,8,15,19,22,48,56,69,72,74,78,82,86,103,119,135,164,165,187,215,218,220,231,265,267,274,278,281,283,284,285,286,287,288,289,290,291,292,293,294,299,322,328,330,345,349,353,361,378,380,381,385,389,434,461,462,463,464,465,466,472,477,478,479,481,482,483,484,485,486,487,488,489,497,498,501,503,504,507,508,516,517,631,638,687,694,698,701,702,707,713,760,769,770,772,773,779,781,783,784,810,814,815,816,817,818,819];
let random = Math.floor(Math.random() * ricks.length);
return random;
}

//UI Logic

function printCharacter(character) {
  console.log(character);
  let randomRick = getRandomRick();
  console.log(randomRick);
  document.querySelector("#showRick").innerText = `Your character is ${character[0][randomRick].name}`
  document.querySelector('#charimg').src = `${character[0][randomRick]['image']}`
  document.querySelector("#statusRick").innerText = `${character[0][randomRick].status}`
  document.querySelector("#speciesRick").innerText = `${character[0][randomRick].species}`
  document.querySelector("#originRick").innerText = `${character[0][randomRick].origin.name}`
}

function printColor(color) {
  document.querySelector("#showResponse").innerText = `Your random color is ${color[0]['hex']} ${color[0][`rgb`]} ${color[0][`hsl`]}`;
  document.body.style.backgroundColor = `${color[0][`rgb`]}`;
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `There was an error processing the color data for ${error}: ${error.status} ${error.statusText}: ${error.message}`;
}

function handleColorSubmission(event) {
  event.preventDefault();
  getRandomColor();
}

function handleRNMSubmission(event) {
  event.preventDefault();
  getAllCharacters();
}

window.addEventListener("load", function() {
  document.querySelector("#submitform").addEventListener("submit", handleColorSubmission);
  document.querySelector('#rickform').addEventListener('submit', handleRNMSubmission);
});