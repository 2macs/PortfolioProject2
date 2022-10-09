![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Rock Paper Scissors Lizard Spock Game
The goal of this webpage is to enable a player to play Rock Paper Scissors Lizard Spock against a computer. RPSLS is a game of chance whereby a player selects an option and then plays against a random selection made by the computer. The creation of the game is attributed to Sam Kass and Karen Bryla. The game was famously used in the TV series 'The Big Bang Theory' to settle a dispute about what to watch on TV between Sheldon and Raj in the episode "The Lizard-Spock Expansion". 

## Site Features
The game is played on a single webpage. On accessing the webpage the player is presented with the game play area and a series of buttons. Each button represents Rock - Paper etc. The page consists of a header, beneath the header is a message area, this message area informs the player to make a choice / selection by clicking on one of the game play buttons. When the user hovers over a game play button the colour of the button and associated text changes to provide feedback to the player confirming their choice. The game play area also consists of 2 images , the default image is the same for both the player and computer at game start. The player score and computer score are set to 0. Below the game play area is a message area which tells the player who has won each individual play, this area is blank at game start. Beneath the message area is another message area which informs the player how the game is progressing with respect to the standard 'Best of 3' game play. This area is set to 0 of 3 at start up. Finally there is a footer that displays the rules of the game to the player. Finally, a refresh button is provided which enables the player to restart the game at any point - note, pressing refresh on the browser achieves the same result. 

!['start screen'](/assets/images/homePage.PNG)

Once the player clicks / selects an option the Game starts and the various score area update. At the end of the game ( when 3 valid games - no ties have occurred  ) a winning message is displayed , the palyer buttons are disabled and the player can then either click the Refresh button on screen or the refresh button on ht ebrowser to restart the game.

!['game screen'](assets/images/gameover.PNG)

## Game Play 
To start the game the player selects an option by clicking on one of the game buttons. This then triggers the computer to make a random selection of options. The game logic then compares the player selection against the computer selection and decides a winner according to the following rules;

•	Scissors cuts paper –  scissors wins.
•	paper covers rock – paper wins.
•	rock crushes lizard – rock wins.
•	lizard poisons Spock – lizard wins.
•	Spock smashes scissors – spock wins.
•	scissors decapitates lizard – scissors wins. 
•	lizard eats paper – lizard wins.
•	Paper disproves Spock – Paper wins
•	Spock vaporizes rock – spock wins. 
•	Rock crushes scissors – rock wins.

Each time the player or computer wins the corresponding score is updated and a message appears in the message area below the graphics. Also, the images change to reflect the player and computer selections. The game is best of three, ties do not count, so if a round is tied the player can select another option and go again. 

Once best of three has been achieved, a message appears under the header informing the player as to who the match, the game play buttons are disabled to prevent further selections from being made. To restart the game, the player can either click the refresh button on screen or click the browser refresh button. 

The game can also be played on small screens however the hover feature does not work on mobile screens as it is not expected that these units will use a mouse to pass over a button prior to selection. 

## Future Enhancements
* Include an option to play the computer or play against another human player.

* Search for more colourful images to represent the indivbidual options ( Rock paper scissors etc.) , currently these images are grey. 

## Testing
HTML

* No errors were returned when passing through the official W3C validator

CSS

* No errors were returned when passing through the official Jigsaw validator

JS

* No errors were returned by JShint

Testing 

* On loading game page, message appears in green font to click button to make choice - passed.
* On loading the game the 5 game play are active and clickable - passed.
* Hover over game buttons - background changes to blue, font colour changes to white - passed.
* On loading page , Player score is set to zero - passed. 
* On loading page , computer score is set to zero - passed. 
* On loading page , game result area is blank - passed. 
* On loading page , best of three area is 0 of 3 - passed. 
* On loading page , refresh button is visible and clickable - passed. 
* On loading page , footer is black and displays the game rules - passed. 
* Click on player buttons, image changes to specific selection - passed.
* Computer image changes to reflect the computer selection - passed. 
* If player wins, player score increments by one - passed.
* If player wins, message appears to reflect player win - passed.
* If computer wins, computer score increments by one - passed.
* If computer wins, message appears to reflect computer win - passed.
* If game is tied, message appears, game total does not increment - passed.
* If game not tied, it is valid, game total increments by one - passed.
* When 3 valid games occur, message at top of screen proclaims the winner - passed.
* When 3 valid games occur, game buttons are disabled - passed.
* When 3 valid games occur, message under game area states GAME OVER - passed.
* Refresh button on screen returns screen to loading page state - passed.
* Browser refresh button returns screen to loading page state - passed. 
* All above tests work in responsive mode, except hover - passed.

### Bugs

None

## Deployment

This site was deployed to GITHUB pages. The steps taken were as follows;

* In the GitHub repository, navigate to the Settings tab

* Click Pages on left sidebar.

* Under Build and Deployment , ensure Source dropdown says Deploy from a branch.

* Select Branch - main from dropdown

* Live link to site can be found here : https://2macs.github.io/PortfolioProject2/

* Github link to project can be found here : https://github.com/2macs/PortfolioProject2

## Credits
https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock 

The Lato font type was found on https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&family=Oswald&display=swap 