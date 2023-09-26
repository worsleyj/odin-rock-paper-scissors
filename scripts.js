// console.log("test")

let playerScore = 0;
let computerScore = 0;
let gameLength = 0; // default game length, dynamically set via prompt
let invalid = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)]
    console.log("Computer has chosen " + computerChoice + "."); 
    return computerChoice;
}

function singleRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.substring(0,1).toUpperCase() + playerChoice.substring(1).toLowerCase(); // capitalizes first letter only
    
    if ((playerChoice == "Rock" && computerChoice == "Scissors") // winning case
    ||(playerChoice == "Scissors" && computerChoice == "Paper")
    ||(playerChoice == "Paper" && computerChoice == "Rock")) {
        console.log("You win! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if ((playerChoice == "Scissors" && computerChoice == "Rock") // losing case
    ||(playerChoice == "Paper" && computerChoice == "Scissors")
    ||(playerChoice == "Rock" && computerChoice == "Paper")) {
        console.log("You lose! " + computerChoice + " beats " + playerChoice + ".");
        computerScore++;
    } else if (playerChoice == computerChoice) { // draw case
        console.log("It's a draw! You both picked " + playerChoice + "!")
    } else { // otherwise, input is invalid
        console.log("Invalid Input! Try again.")
        console.log("You Entered: " + playerChoice)
        invalid++;
    }
}

function game() {
    let counter = 0;
    gameLength = parseInt(prompt("How many rounds would you like to play? Whole numbers only"))
    while (counter < gameLength) {
        singleRound(prompt("Choose Rock, Paper, or Scissors"), getComputerChoice())
        counter++;

        if (invalid > 0) { // if invalid input was given, run another round
            counter--;
            invalid--;
        }
    }

    console.log("You won " + playerScore + " rounds out of " + gameLength + ", while the computer won " + computerScore + " rounds.")
    console.log(gameLength-(playerScore+computerScore) + " rounds ended in a draw.")
    if (playerScore > computerScore) {
        console.log("You won the game! To play again, refresh the page.")
    } else if (playerScore < computerScore) {
        console.log("You lost the game! To play again, refresh the page.")
    } else {
        console.log("This game was a draw! To play again, refresh the page.")
    }
}

game()