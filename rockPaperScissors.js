function computerPlay() {
    const randomNumber = Math.random()
    // A random number between 0 and 1

    if (randomNumber <= (1/3)) {
        return "Rock"
    } else if (randomNumber > (2/3)) {
        return "Paper"
    } else {
        // This is a number between 1/3 to 2/3
        return "Scissors"
    }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
// Increments the global variables for scores and returns a sentence

    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()

    if (player === computer) {
        return "Tie"
    } else if (player === "rock") {
        switch (computer) {
            case "paper":
                computerScore++
                return "You Lose! Paper beats Rock"
                break
            case "scissors":
                playerScore++
                return "You Win! Rock beats Scissors"
                break
        }
    } else if (player === "paper") {
        switch (computer) {
            case "scissors":
                computerScore++
                return "You Lose! Scissors beat Rock"
                break
            case "rock":
                playerScore++
                return "You Win! Paper breats Rock"
                break
        }
    } else if (player === "scissors") {
        switch (computer) {
            case "rock":
                computerScore++
                return "You Lose! Rock beats Scissors"
                break
            case "paper":
                playerScore++
                return "You Win! Scissors beat Paper"
        }
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(playRound(button.id, computerPlay()));
    document.getElementById("yourScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
  });
});