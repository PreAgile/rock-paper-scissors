let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.textContent = `${user} beats ${computer} You Win! 🥰`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(user, computer) {
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.textContent = `${user} lose ${computer}. You lose! 😖`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(user, computer) {
  const userChoice_div = document.getElementById(user);
  result_div.textContent = `${user} and ${computer} DRAW! 😕`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + "-" + computerChoice) {
    case "rock-scissors":
    case "scissors-paper":
    case "paper-rock":
      win(userChoice, computerChoice);
      break;
    case "rock-paper":
    case "scissors-rock":
    case "paper-scissors":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });
  paper_div.addEventListener("click", () => {
    game("paper");
  });
  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}

main();
