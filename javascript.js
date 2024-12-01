//find random between 0 and 2
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

//keep track of score
let humanScore = 0;
let computerScore = 0;

const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

//get computer choice
function getComputer(){
    let x = getComputerChoice();
    if (x === 0){
        return "Rock";
    }
    else if (x === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

//get human choice
function getHuman(){
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const humanChoice = event.target.textContent;
            const computerChoice = getComputer();
            playRound(humanChoice, computerChoice); 
        });
    });
}

//write logic to play a single round
function playRound(humanChoice, computerChoice){
    let resultMessage = "";

    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()){
        resultMessage = "Draw!";
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
    humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" || 
    humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")
    {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else{
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    if (humanScore == 5){
        resultDiv.innerHTML = `
        <p>You are the winner!</p>
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p> 
        `;
    }
    else if (computerScore == 5) {
        resultDiv.innerHTML = `
        <p>Computer is the winner!</p>
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p> 
        `;
    }
    else{
        resultDiv.innerHTML = `
        <p>${resultMessage}</p>
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
        `;
    }

    
}

document.addEventListener("DOMContentLoaded", () => {
    getHuman();
});

