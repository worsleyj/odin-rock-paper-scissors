// results.textContent = ("test")

let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
let winTotal = 0;
let loseTotal = 0;

const won = document.querySelector("#Won");
const draw = document.querySelector("#Draw");
const lost = document.querySelector("#Lost");
const winner = document.querySelector("#winner")
const totalWon = document.querySelector("#totalWon");
const totalLost = document.querySelector("#totalLost");

won.textContent = "Won: " + playerScore;
draw.textContent = "Draw: " + drawCount;
lost.textContent = "Lost: " + computerScore;
totalWon.textContent = ("Games Won: " + 0);
totalLost.textContent = ("Games Lost: " + 0);

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    singleRound("rock", getComputerChoice());
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    singleRound("paper", getComputerChoice());
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    singleRound("scissors", getComputerChoice());
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    playerScore = computerScore = drawCount = winTotal = loseTotal = 0;
    won.textContent = "Won: " + playerScore;
    draw.textContent = "Draw: " + drawCount;
    lost.textContent = "Lost: " + computerScore;
    totalWon.textContent = ("Games Won: " + 0);
    totalLost.textContent = ("Games Lost: " + 0);
    results.textContent = ("The game has been reset"); 
})

const results = document.querySelector("#results");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)]
    results.textContent = ("Computer has chosen " + computerChoice + "."); 
    return computerChoice;
}

function singleRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.substring(0,1).toUpperCase() + playerChoice.substring(1).toLowerCase(); // capitalizes first letter only
    if (winner.textContent != "") {
        winner.textContent = "";
    }
    if (playerChoice == "Gun") {
        results.textContent = ("You won, but at what cost?");
        playerScore++;
    } else if ((playerChoice == "Rock" && computerChoice == "Scissors") // winning case
    ||(playerChoice == "Scissors" && computerChoice == "Paper")
    ||(playerChoice == "Paper" && computerChoice == "Rock")) {
        results.textContent = ("You win! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
        won.textContent = "Won: " + playerScore;
    } else if ((playerChoice == "Scissors" && computerChoice == "Rock") // losing case
    ||(playerChoice == "Paper" && computerChoice == "Scissors")
    ||(playerChoice == "Rock" && computerChoice == "Paper")) {
        results.textContent = ("You lose! " + computerChoice + " beats " + playerChoice + ".");
        computerScore++;
        lost.textContent = "Lost: " + computerScore;
    } else if (playerChoice == computerChoice) { // draw case
        results.textContent = ("It's a draw! You both picked " + playerChoice + "!")
        invalid++;
        drawCount++;
        draw.textContent = "Draw: " + drawCount;
    }

    if(playerScore == 5) {
        playerScore = drawCount = computerScore = 0;
        won.textContent = "Won: " + playerScore;
        draw.textContent = "Draw: " + drawCount;
        lost.textContent = "Lost: " + computerScore;
        winner.textContent = ("You won the game! The scores have been reset.")
        totalWon.textContent = ("Games Won: " + ++winTotal);
    }

    if(computerScore == 5) {
        playerScore = drawCount = computerScore = 0;
        won.textContent = "Won: " + playerScore;
        draw.textContent = "Draw: " + drawCount;
        lost.textContent = "Lost: " + computerScore; 
        winner.textContent = ("You lost the game! The scores have been reset.")
        totalLost.textContent = ("Games Lost: " + ++loseTotal);
        }
    }

// while(playerScore != 5 || computerScore != 5) {

// }

function game() {
    let counter = 0;
    while (counter < gameLength) {
        singleRound(prompt("Choose Rock, Paper, or Scissors"), getComputerChoice())
        counter++;

        if (invalid > 0) { // if invalid input was given, run another round
            counter--;
            invalid--;
        }
    }

    results.textContent = ("You won " + playerScore + " rounds out of " + gameLength + ", while the computer won " + computerScore + " rounds.")
    results.textContent = (drawCount + " rounds ended in a draw.")
    if (playerScore > computerScore) {
        results.textContent = ("You won the game! To play again, refresh the page.")
    } else if (playerScore < computerScore) {
        results.textContent = ("You lost the game! To play again, refresh the page.")
    } else {
        results.textContent = ("This game was a draw! To play again, refresh the page.")
    }
}

game()