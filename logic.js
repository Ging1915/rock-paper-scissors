const playerOption = document.querySelectorAll('.game ul button');
const roundResult = document.querySelector('#displayResult');
const playerPoints = document.querySelector('#playerTotal');
const computerPoints = document.querySelector('#computerTotal');
const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click',() => location.reload())

playerOption.forEach(button =>{button.addEventListener('click',getPlayerChoice)});

let computerChoice = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let computerScore = 0;
let playerChoice;


function computerGuess(){
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return result;
} 


function round (playerSelection, computerSelection) {
    let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
    let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
        playerPoints.textContent = ++playerScore;
        computerPoints.textContent = ++computerScore;
        roundResult.textContent = "Tie!";
    }
    else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore;
        roundResult.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }
    else {
        computerPoints.textContent = ++computerScore
        roundResult.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
checkWinner();
}

const winnerResults = {
    computer: ['You lost the game to the computer!'],
    player: ['You won the game!'],
    tie: ['The game is a tie!']
}

function checkWinner() {
    if (computerScore === 5 || playerScore ===5){
        if (computerScore === playerScore){
            updateWinner('tie')
        }else {
            let win = `${(computerScore > playerScore) ? 'computer' : 'player' }`;
            updateWinner(win);
        }
    }
}

function updateWinner(winner){
    roundResult.textContent = winnerResults[winner] [0];
    roundResult.textContent = winnerResults [winner] [1];

    playerOption.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    });
}


function getPlayerChoice (e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    round(playerSelection, computerGuess());
}

