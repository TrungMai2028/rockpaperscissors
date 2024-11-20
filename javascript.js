//find random between 0 and 2
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

//keep track of score
let humanScore = 0;
let computerScore = 0;

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
    //prompt user to type in
    return prompt("Enter your choice: ");
}

//write logic to play a single round
function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()){
        console.log("Draw");
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors" ||
    humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock" || 
    humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else{
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

const humanSelection = getHuman();
const computerSelection = getComputer();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);