// console.log("test")

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)]
    // console.log("Computer has chosen " + computerChoice); 
    return computerChoice;
}

function singleRound(playerChoice, computerChoice) {
    if ((playerChoice == "Rock" && computerChoice == "Scissors")
    ||(playerChoice == "Scissors" && computerChoice == "Paper")
    ||(playerChoice == "Paper" && computerChoice == "Rock")) {
        console.log("You win! " + playerChoice + " beats " + computerChoice + ".");
    } else if ((playerChoice == "Scissors" && computerChoice == "Rock")
    ||(playerChoice == "Paper" && computerChoice == "Scissors")
    ||(playerChoice == "Rock" && computerChoice == "Paper")) {
        console.log("You lose! " + computerChoice + " beats " + playerChoice + ".");
    } else {
        console.log("It's a draw! You both picked " + playerChoice + "!")
    }
}

// singleRound("Rock", getComputerChoice())