

let randomNumber = Math.floor(Math.random() * 3)
let playerScore = 0
let computerScore = 0
let message = ''

function computerSelection (randomNumber) {
    if (randomNumber == 0) {
        computerGuess = 'rock';
        return computerGuess;
    }
    else if (randomNumber == 1) {
        computerGuess = 'paper';
        return computerGuess;
    }
    else {
        computerGuess = 'scissors';
        return computerGuess;
    }
}

function playRound (computerSelection){

    playerChoice = prompt('What will it be Rock Paper or Scissors?');

    if (playerChoice == 'rock' && computerSelection == 'scissors'){
        playerScore = playerScore + 1;
        message = 'You won! Rock beats Scissors';
        return [message, playerScore]
    }
    else if (playerChoice == 'paper' && computerSelection == 'rock'){
        playerScore = playerScore + 1;
        message = 'You won! Paper beats Rock';
        return [message, playerScore]
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper'){
        playerScore = playerScore + 1;
        message = 'You won! Scissors beats Paper';
        return [message, playerScore]
    }
    else if (computerSelection == 'rock' && playerChoice == 'scissors'){
        computerScore = computerScore + 1;
        message = 'You lost! Rock beats Scissors';
        return [message, computerScore]
    }
    else if (computerSelection == 'paper' && playerChoice == 'rock'){
        computerScore = computerScore + 1;
        message = 'You lost! Paper beats Rock';
        return [message, computerScore]
    }
    else if (computerSelection == 'scissors' && playerChoice == 'paper'){
        computerScore = computerScore + 1;
        message = 'You lost! Scissors beats Paper';
        return [message, computerScore]
    }
    else {
        computerScore = computerScore + 1;
        playerScore = playerScore + 1;
        message = 'Its a tie!'
        return [message, playerScore, computerScore]
    }
}
console.log(playRound(computerSelection(randomNumber)))


console.log (playRound)

function game(playRound){
    let i = 0
    while (i < 5){
    playRound();
    i = i + 1;
    }
}


console.log (game)