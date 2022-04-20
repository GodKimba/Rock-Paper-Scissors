let rock = 0;
let paper = 1;
let scissors = 2;
let computerChoice;

// Randomize computer choice
function computerPlay() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == rock) {
    computerChoice = rock;
  } else if (computerChoice == paper) {
    computerChoice = paper;
  } else if (computerChoice == scissors) {
    computerChoice = scissors;
  }
}

// Rock, Paper and Scissors game function
function playRound(playerSelection, computerChoice) {
  if (playerSelection == computerChoice) {
    console.log("Tie");
  } if (playerSelection == 1 && computerChoice == 2) {
    console.log("You Lose! Scissors beats Paper");
  } if (playerSelection == 1 && computerChoice == 0) {
    console.log("You Win! Paper beats Rock");
  } if (playerSelection == 2 && computerChoice == 1) {
    console.log("You Win! Scissors beats Paper");
  } if (playerSelection == 2 && computerChoice == 0) {
    console.log("You Lose! Rock beats Scissors");
  } if (playerSelection == 0 && computerChoice == 1) {
    console.log("You Lose! Rock beats Paper");
  } if (playerSelection == 0 && computerChoice == 2) {
    console.log("You Win! Rock beats Scissors");
  }
}
computerPlay();

let playerSelection = prompt("Enter your choice: ");
playerSelection = playerSelection.toLowerCase()

if (playerSelection == "rock") {
    playerSelection = 0
} else if (playerSelection == "paper") {
    playerSelection = 1
} else if (playerSelection == "scissors") {
    playerSelection = 2
}

function game() {
   for (let i = 0; i < 5; i++) {
    playRound()
    
}

game()