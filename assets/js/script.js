const bestOfThree = 3;
var currentGame = 0;
const gameButtons = document.getElementsByClassName('myButton'); //access all the buttons on the DOM
const refreshButton = document.getElementById('refresh-game'); //access the refresh button 
const playerScore = document.getElementById("player-score"); //access player score, will need to increment when player wins
const computerScore = document.getElementById("system-score"); //access computer score
const playerImage = document.getElementById("player-image"); // image will change per user selection
const computerImage = document.getElementById("computer-image"); //image will change per random selection for computer
const winnerMessage = document.getElementById("winner-message"); //Output message to user
const overAllWinner = document.getElementById("game-heading"); //Output overall winner message
const gameTracker = document.getElementById("current-game");
var options = ['rock', 'paper', 'scissors', 'lizard', 'spock']; //use to get / change image to display

var playerWins = 0;
var computerWins = 0;

let gameCount = document.getElementById('best-of');
gameCount.innerHTML = bestOfThree;

//Add an event listener for the refresh button, it could be pressed at any time.
refreshButton.addEventListener('click', function(){
    //refresh the screen
    window.location.reload();
})

//call to main function 
main();

//First we will get the choice made by the player that is what button did the user click?
/**
 * Add event listener to buttons to get player choice.
 */
function main() {

    for (var button of gameButtons) {
        button.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-pick');
            if (currentGame < gameCount.innerHTML) {
                //start the game
                runGame(playerChoice);
            } else {
                alert('Something went wrong, try again');
            }
        })
    }
}

/**
 * This is the run game function, player choice is known. 
 */
function runGame(playerChoice) {
    //change player image to reflect player selection
    playerImage.src = `assets/images/${options[playerChoice]}.PNG`;
    playerImage.style.width = '160px';
    playerImage.style.height = '180px';
    playerImage.style.objectFit = 'cover';
    playerImage.style.color = 'blue';
    playerImage.alt = options[playerChoice];

    //Next get the computer choice, random number between 0 and 4
    let computerChoice = Math.floor(Math.random() * 5);

    //next change the computer image to reflect the computer selection
    computerImage.src = `assets/images/${options[computerChoice]}.PNG`;
    computerImage.style.width = '160px';
    computerImage.style.height = '180px';
    computerImage.style.objectFit = 'cover';
    computerImage.alt = options[computerChoice];

    // establish who won and deal with ties , call winCalc function   
    let result = winCalc(playerChoice, computerChoice);

    if (result == 0) { //its a tie
        winnerMessage.innerHTML = 'Its a tie, please play again';
        winnerMessage.style.color = 'orange';
    } else if (result == 1) { // Player wins
        winnerMessage.innerHTML = 'Player wins !  ' + options[playerChoice] + ' beats ' + options[computerChoice];
        winnerMessage.style.color = 'blue';
        //increment player score
        playerWins += 1; //increment by one because player just won this game
        playerScore.innerText = playerWins; // write the new score to the DOM
        currentGame += 1;
        gameTracker.innerHTML = currentGame;
    } else if (result == 2) { // Computer wins
        winnerMessage.innerHTML = 'Computer wins !  ' + options[computerChoice] + ' beats ' + options[playerChoice];
        winnerMessage.style.color = 'red';
        computerWins += 1; //increment by one because computer just won this game
        computerScore.innerText = computerWins; // write the new score to the DOM
        currentGame += 1;
        gameTracker.innerHTML = currentGame;
    }
    if (currentGame == gameCount.innerHTML) {
        winnerMessage.innerHTML = 'GAME OVER';
        endgame();
    }
}

/**
 * This function takes the user selection and computer selection and returns a winner
 */
function winCalc(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) { //its a tie
        return 0;
    } else if (playerChoice == 0) { // Player selects rock
        if (computerChoice == 2 || computerChoice == 3) {
            return 1; // Player wins
        } else {
            return 2; //Computer wins
        }
    } else if (playerChoice == 1) { // Player selects paper
        if (computerChoice == 0 || computerChoice == 4) {
            return 1; // Player wins
        } else {
            return 2; //Computer wins
        }
    } else if (playerChoice == 2) { // Player selects scissors
        if (computerChoice == 1 || computerChoice == 3) {
            return 1; // Player wins
        } else {
            return 2; //Computer wins
        }
    } else if (playerChoice == 3) { // Player selects lizard
        if (computerChoice == 4 || computerChoice == 1) {
            return 1; // Player wins
        } else {
            return 2; //Computer wins
        }
    } else if (playerChoice == 4) { // Player selects Spock
        if (computerChoice == 0 || computerChoice == 2) {
            return 1; // Player wins
        } else {
            return 2; //Computer wins
        }
    } else { // problem with game
        winnerMessage.innerText = "Problem with game, please try again";
    }
}

/**
 * This function closes the game, disbales the play buttons and outputs an overall winner of the best in three game
 */
function endgame() {
    //disable buttons, prevent user from continuing
    for (button of gameButtons) {
        button.setAttribute('disabled', 1);
    }


    if (playerScore.innerText > computerScore.innerText) {
        overAllWinner.innerText = ' PLAYER WINS! Refresh page to continue';
        overAllWinner.style.fontSize = '2rem';
        overAllWinner.style.color = 'blue';
        overAllWinner.style.paddingLeft = '30px';

    } else {
        overAllWinner.innerText = ' YOU LOSE! Refresh page to continue';
        overAllWinner.style.fontSize = '2rem';
        overAllWinner.style.color = 'red';
        overAllWinner.style.paddingLeft = '30px';
    }
}