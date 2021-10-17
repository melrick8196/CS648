function play(){
    "use strict";

    let computerChoice = Math.ceil(Math.random() *10);
    console.log(computerChoice);
    console.log("Computer:-"+computerChoice)
    var isRock = Boolean (computerChoice >= 0 && computerChoice < 3);
    var isPaper = Boolean (computerChoice >= 3.1 && computerChoice < 6);



    var playerChoice = prompt('Choose Rock(R), Paper(P), Scissors(S):');
    var isplayerChoiceRock = Boolean (playerChoice.toUpperCase() == "R" || playerChoice.toLowerCase() == "rock");
    var isplayerChoicePaper = Boolean (playerChoice.toUpperCase() == "P" || playerChoice.toLowerCase() == "paper");
    var isplayerChoiceScissors = Boolean (playerChoice.toUpperCase() == "S" || playerChoice.toLowerCase() == "scissors");

    if(isRock){
        // computer is Rock
        if(isplayerChoiceRock){
            alert("Computer chose Rock, It's a draw");
        } else if(isplayerChoicePaper){
            alert("Computer chose Rock, You win");
        } else{
            alert("Computer chose Rock, You lose");
        }
    } else if (isPaper){
        // computer is Paper
        if(isplayerChoiceScissors){
            alert("Computer chose Paper, You win");
        } else if(isplayerChoicePaper){
            alert("Computer chose Paper, It's a draw");
        } else{
            alert("Computer chose Paper, You lose");
        }
    } else {
        // computer is Scissors
        if(isplayerChoiceRock){
            alert("Computer chose Scissors, You win");
        } else if(isplayerChoiceScissors){
            alert("Computer chose Scissors, It's a draw");
        } else{
            alert("Computer chose Scissors, You lose");
        }
    }
}

function main() {
    "use strict";
    var playAgain = 'y';
    while ( playAgain === "y") {
        play();
        playAgain = window.prompt("Do you want to play again (y/n)?");
    }

}

main();