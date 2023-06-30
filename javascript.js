
// Randomly assigns the Computer a number between 0 and 2 with 0 representing "rock", 1 representing "paper" and 2 representing "scissors"
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0){
        return "rock";
    } else if(randomChoice == 1){
        return "paper";
    } else{
        return "scissors";
    }
}



let userWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection){

    // Asks the user whether they want to choose rock, paper, or scissors
    //let playerChoice = prompt("Rock, Paper, Scissors");
    playerChoice.toLowerCase(); // Convert users input to all lowercase letters

    playerSelection = playerChoice;
    computerSelection = getComputerChoice();

    if(playerSelection == "rock" && computerSelection == "paper"){
        computerWins++;
        console.log("You lose! Paper beats rock");
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        userWins++;
        console.log("You win! Rock beats scissors");
    } else if(playerSelection == "rock" && computerSelection == "rock"){
        console.log("It's a tie, try again");
        playRound();
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        userWins++;
        console.log("You win! Paper beats rock");
    } else if(playerSelection == "paper" && computerSelection == "paper"){
        console.log("It's a tie, try again");
        playRound();
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerWins++;
        console.log("You lose! Scissors beats paper");
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerWins++;
        console.log("You lose! Rock beats scissors");
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        userWins++;
        console.log("You win! Scissors beats paper");
    } else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("It's a tie, try again");
        playRound();
    }

}

// Plays a round 5 times and displays the winner at the end stating how many wins both players had
function game(){
    for (i = 0; i < 5; i++){
        playRound();
    }
    if(userWins > computerWins){
        console.log("You win, " + userWins + " to " + computerWins + "!");
    } else{
        console.log("You lose, " + computerWins + " to " + userWins + "!");
    }
}

game();
