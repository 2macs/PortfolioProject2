const bestOfThree = 3;
var currentGame = 0;
const gameButtons = document.getElementsByClassName('myButton');  //access all the buttons on the DOM
const playerScore = document.getElementById("player-score");  //access player score, will need to increment when player wins
const computerScore = document.getElementById("system-score"); //access computer score
const playerImage = document.getElementById("player-image" );  // image will change per user selection
const computerImage = document.getElementById("computer-image"); //image will change per random selection for computer
const winnerMessage = document.getElementById("winner-message"); //Output message to user
var options=['rock','paper','scissors','lizard','spock']; //use to get / change image to display


let gameCount = document.getElementById('best-of');
gameCount.innerHTML = bestOfThree;
console.log(gameCount.innerHTML);

//First we will get the choice made by the player that is what button did the user click?
/**
 * Add event listener to buttons to get player choice.
 */
for (button of gameButtons){
    button.addEventListener('click',function() {
        let playerChoice = this.getAttribute('data-pick');
        
        //start the game
        runGame(playerChoice);
    })
}

/**
 * This is the main game function, player choice is known. 
 */
function runGame(playerChoice){
    
    //change player image to reflect player selection
    playerImage.src = `assets/images/${options[playerChoice]}.PNG`;
    playerImage.alt = options[playerChoice];

    //Next get the computer choice, random number between 0 and 4
    let computerChoice = Math.floor(Math.random()*5);
    
    //next change the computer image to refelct the computer selection
    computerImage.src = `assets/images/${options[computerChoice]}.PNG`;
    computerImage.alt = options[computerChoice];

    // establish who won and deal with ties , call winCalc function   
    let result = winCalc(playerChoice,computerChoice);
    console.log(result);

}

/**
 * This function takes the user selection and computer selection and returns a winner
 */
function winCalc(playerChoice,computerChoice){
    console.log('wincalc has been called,' +playerChoice + ',' + computerChoice);
    
    if (playerChoice == computerChoice){ //its a tie
        return 0;
    } else if (playerChoice == 0){  // Player selects rock
        if (computerChoice == 2 || computerChoice == 3){
            return 1; // Player wins
        }
        else{
            return 2; //Computer wins
        }
    } else if (playerChoice == 1){  // Player selects paper
        if (computerChoice == 0 || computerChoice == 4){
            return 1; // Player wins
        }
        else{
            return 2; //Computer wins
        }
    } else if (playerChoice == 2){  // Player selects scissors
        if (computerChoice == 1 || computerChoice == 3){
            return 1; // Player wins
        }
        else{
            return 2; //Computer wins
        }
    } else if (playerChoice == 3){  // Player selects lizard
        if (computerChoice == 4 || computerChoice == 1){
            return 1; // Player wins
        }
        else{
            return 2; //Computer wins
        }
    } else if (playerChoice == 4){  // Player selects lizard
        if (computerChoice == 0 || computerChoice == 3){
            return 1; // Player wins
        }
        else{
            return 2; //Computer wins
        }
    }
    else { // problem with game
        winnerMessage.innerText = "Problem with game, please try again";
    }

}
