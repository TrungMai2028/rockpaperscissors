//find random between 0 and 2
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());
//keep track of score
let humanScore = 0;
let computerScore = 0;

//get computer choice
function getComputer(){
    let x = getComputerChoice();
    if (x == 0){
        return "Rock";
    }
    else if (x == 1){
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
    
}

const humanSelection = getHuman();
const computerSelection = getComputer();

playRound(humanSelection, computerSelection);