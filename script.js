const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultsDiv = document.querySelector(".results");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
const playAgainBtn = document.querySelector(".play-again");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    }
}

const updateScore = () => {
    playerScoreDiv.textContent = `Player Score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    if (humanScore === 5){
        resultsDiv.textContent = "Player Wins!";
        playAgainBtn.classList.toggle("hide");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore === 5){
        resultsDiv.textContent = "Computer Wins!"
        playAgainBtn.classList.toggle("hide");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice){
        resultsDiv.textContent = "You tied!";
        updateScore();
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        resultsDiv.textContent = "You lose! Paper beats Rock";
        computerScore++;
        updateScore();
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        resultsDiv.textContent = "You win! Rock beats Scissors";
        humanScore++;
        updateScore();
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        resultsDiv.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        updateScore();
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        resultsDiv.textContent = "You win! Paper beats Rock";
        humanScore++;
        updateScore();
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        resultsDiv.textContent = "You lose! Rock beats scissors";
        computerScore++;
        updateScore();
    }
    else{
        resultsDiv.textContent = "You win! Scissors beats Paper";
        humanScore++;
        updateScore();
    }
}

const reset = () => {
    computerScore = 0;
    humanScore = 0;
    playAgainBtn.classList.toggle("hide");
    updateScore();
    resultsDiv.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
playAgainBtn.addEventListener("click", () => reset());
