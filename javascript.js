//find random between 0 and 2
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());


//prompt user to type in
console.log(prompt("Enter your choice: "));

//keep track of score
let humanScore = 0;
let computerScore = 0;