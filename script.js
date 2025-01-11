const button = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

button.forEach(function (button) {
  button.addEventListener("click", () => {
    const results = playRound(button.id, computerPlay());
    resultEl.textContent = results;
  });
});

function computerPlay() {
  let computerData = ["rock", "paper", "scissor"];

  let length = Math.floor(Math.random() * computerData.length);
  return computerData[length];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return " its tie bro 🤥";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === " rock")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You won 🎉🎊🥳, Your ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lost 😒 computer won,computer ${computerSelection} beats the ${playerSelection}; `;
  }
}
