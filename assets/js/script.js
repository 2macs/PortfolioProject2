const bestOfThree = 3;
var currentGame = 0;
const gameButtons = document.getElementsByClassName('myButton');  //access all the buttons on the DOM
const playerScore = document.getElementById("player-score");  //access player score, will need to increment when player wins
const computerScore = document.getElementById("system-score"); //access computer score
const playerImage = document.getElementById("player-image" );  // image will change per user selection
const computerImage = document.getElementById("computer-image"); //image will change per random selection for computer
const winnerMessage = document.getElementById("winner-message"); //Output message to user


let gameCount = document.getElementById('best-of');
gameCount.innerHTML = bestOfThree;
console.log(gameCount.innerHTML);