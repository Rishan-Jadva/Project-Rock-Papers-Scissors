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

const getHumanChoice = () => {
    const choice = prompt("Rock, Paper or Scissors?");
    return choice;
}


const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("You tied!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else{
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
}

let humanScore = 0;
let computerScore = 0;
const playGame = () => {
    for (let i = 0; i <= 4; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore){
        console.log(`You Won! With a score of ${humanScore} against ${computerScore}`)
    }
    else if (computerScore > humanScore){
        console.log(`You lost! With a score of ${humanScore} against ${computerScore}`)
    }
    else{
        console.log(`It was a tie with both getting a score of ${humanScore}`)
    }
}
playGame()