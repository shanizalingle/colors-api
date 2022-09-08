import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RandomColor from './js/colors-api.js';
import AllRicks from './js/rick-api.js';
import AllMortys from './js/morty-api.js';

//Business Logic

function getRandomColor() {
  let promise = RandomColor.getRandomColor();
  promise.then(function(color) {
    printColor(color);
  }, function (error) {
    printError(error);
  });
}

function getAllRicks() {
  let promise = AllRicks.getAllRicks();
  promise.then(function(rick) {
    printRicks(rick);
  }, function (error) {
    printError(error);
  });
}

function getAllMortys() {
  let promise = AllMortys.getAllMortys();
  promise.then(function(morty) {
    printMortys(morty);
  }, function (error) {
    printError(error);
  });
}

function getRandomRick() {
  const ricks = [1,8,15,19,22,48,56,69,72,74,78,82,86,103,119,135,164,165,187,215,218,220,231,265,267,274,278,281,283,284,285,286,287,288,289,290,291,292,293,294,299,322,328,330,345,349,353,361,378,380,381,385,389,434,461,462,463,464,465,466,472,477,478,479,481,482,483,484,485,486,487,488,489,497,498,501,503,504,507,508,516,517,631,638,687,694,698,701,702,707,713,760,769,770,772,773,779,781,783,784,810,814,815,816,817,818,819];
  let randomRick = Math.floor(Math.random() * ricks.length);
  return randomRick;
}

function getRandomMorty() {
  const mortys = [2,14,18,21,27,42,43,44,53,61,73,77,83,84,85,95,113,118,123,143,152,200,206,209,217,229,230,231,232,233,234,235,298,325,359,360,366,392,401,473,474,475,476,480,499,505,512,518,630,636,637,659,660,661,685,690,696,699,706,715,759,801,802,803,805,811,812,820,]
  let randomMorty = Math.floor(Math.random() * mortys.length);
  return randomMorty;
}

//UI Logic

function printRicks(rick) {
  console.log(rick);
  let randomRick = getRandomRick();
  console.log(`your randomRick is ${randomRick}`);
  document.querySelector("#showRick").innerText = `Your Rick is ${rick[0][randomRick].name}`
  document.querySelector('#rickIMG').src = `${rick[0][randomRick]['image']}`
  document.querySelector("#statusRick").innerText = `Status: ${rick[0][randomRick].status}`
  document.querySelector("#speciesRick").innerText = `Species: ${rick[0][randomRick].species}`
  document.querySelector("#originRick").innerText = `Origin: ${rick[0][randomRick].origin.name}`
}

function printMortys(morty) {
  console.log(morty);
  let randomMorty = getRandomMorty();
  console.log(`your randomMorty is ${randomMorty}`);
  document.querySelector("#showMorty").innerText = `Your Morty is ${morty[randomMorty].name}`
  document.querySelector('#mortyIMG').src = `${morty[randomMorty]['image']}`
  document.querySelector("#statusMorty").innerText = `Status: ${morty[randomMorty].status}`
  document.querySelector("#speciesMorty").innerText = `Species: ${morty[randomMorty].species}`
  document.querySelector("#originMorty").innerText = `Origin: ${morty[randomMorty].origin.name}`
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

function handleRickSubmission(event) {
  event.preventDefault();
  getAllRicks();
}

function handleMortySubmission(event) {
  event.preventDefault();
  getAllMortys();
}

window.addEventListener("load", function() {
  document.querySelector("#submitform").addEventListener("submit", handleColorSubmission);
  document.querySelector('#rickform').addEventListener('submit', handleRickSubmission);
  document.querySelector('#mortyform').addEventListener('submit', handleMortySubmission);
});