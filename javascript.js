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

userWins = 0;
computerWins = 0;

function playRound(playerSelection, computerSelection){

    computerSelection = getComputerChoice();
    playerSelection = prompt("Please enter your choice:");

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


function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

function winner(){
    if(userWins > computerWins){
        console.log("You win!");
    } else{
        console.log("You lose!");
    }
}

game();
winner();