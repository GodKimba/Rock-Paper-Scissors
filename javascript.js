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

let playerScore = 0;
let computerScore = 0;

// Rock, Paper and Scissors game function
function playRound() {
  let playerSelection = prompt("Enter your choice: ").toLowerCase();

  computerPlay();

  if (playerSelection == "rock") {
    playerSelection = 0;
  } else if (playerSelection == "paper") {
    playerSelection = 1;
  } else if (playerSelection == "scissors") {
    playerSelection = 2;
  }

  if (playerSelection == computerChoice) {
    console.log("Tie");
  }
  if (playerSelection == 1 && computerChoice == 2) {
    console.log("You Lose! Scissors beats Paper");
    return (computerScore += 1);
  }
  if (playerSelection == 1 && computerChoice == 0) {
    console.log("You Win! Paper beats Rock");
    return (playerScore += 1);
  }
  if (playerSelection == 2 && computerChoice == 1) {
    console.log("You Win! Scissors beats Paper");
    return (playerScore += 1);
  }
  if (playerSelection == 2 && computerChoice == 0) {
    console.log("You Lose! Rock beats Scissors");
    return (computerScore += 1);
  }
  if (playerSelection == 0 && computerChoice == 1) {
    console.log("You Lose! Rock beats Paper");
    return (computerScore += 1);
  }
  if (playerSelection == 0 && computerChoice == 2) {
    console.log("You Win! Rock beats Scissors");
    return (playerScore += 1);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (computerScore > playerScore) {
    alert("Computer Wins!");
  } else if (playerScore > computerScore) {
    alert("Player Wins");
  } else {
    alert("Tie");
  }
}

game();
