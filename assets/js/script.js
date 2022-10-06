const bestOfThree = 3;
var currentGame = 0;
const gameButtons = document.getElementsByClassName('myButton');  //access all the buttons on the DOM
const playerScore = document.getElementById("player-score");  //access player score, will need to increment when player wins
const computerScore = document.getElementById("system-score"); //access computer score
const playerImage = document.getElementById("player-image" );  // image will change per user selection
const computerImage = document.getElementById("computer-image"); //image will change per random selection for computer
const winnerMessage = document.getElementById("winner-message"); //Output message to user
const overAllWinner = document.getElementById("game-heading"); //Output overall winner message
const gameTracker = document.getElementById("current-game");
var options=['rock','paper','scissors','lizard','spock']; //use to get / change image to display
var playerWins = 0;
var computerWins = 0;


let gameCount = document.getElementById('best-of');
gameCount.innerHTML = bestOfThree;
console.log(gameCount.innerHTML);

main();

//First we will get the choice made by the player that is what button did the user click?
/**
 * Add event listener to buttons to get player choice.
 */
    function main(){    
    
    for (button of gameButtons){         
            button.addEventListener('click',function() {
            let playerChoice = this.getAttribute('data-pick');    
        
                if(currentGame < gameCount.innerHTML){
                    //start the game
                    runGame(playerChoice);
                    console.log(currentGame + ',' + gameCount.innerHTML); 
                    
                }else 
                     {alert('Something went wrong, try again');} 
            }) 
            }
    } 


/**
 * This is the run game function, player choice is known. 
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
        if (result == 0) {//its a tie
            winnerMessage.innerHTML = 'Its a tie, please play again';
        } else if (result == 1){  // Player wins
            winnerMessage.innerHTML = 'Player wins !';
            //increment player score
            playerWins += 1; //increment by one because player just won this game
            playerScore.innerText = playerWins; // write the new score to the DOM
            currentGame +=1;
            gameTracker.innerHTML = currentGame;                
                }
         else if (result == 2){  // Computer wins
            winnerMessage.innerHTML = 'Computer wins !';
            computerWins += 1; //increment by one because computer just won this game
            computerScore.innerText = computerWins; // write the new score to the DOM
            currentGame += 1;
            gameTracker.innerHTML = currentGame;            
        }
        if(currentGame == gameCount.innerHTML){
            endgame();}

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

function endgame(){
    //alert('GameOver' + 'pLAYER SCORE IS '+playerScore.innerText + 'Computer score is ' + computerScore.innerText);
    //disable buttons, prevent user from continuing
    for (button of gameButtons){
    button.setAttribute('disabled',1);}

    if (playerScore.innerText > computerScore.innerText){
        overAllWinner.innerText = ' PLAYER WINS! Refresh page to continue';
    } else {
        overAllWinner.innerText = ' COMPUTER WINS! Refresh page to continue';
    }
}
