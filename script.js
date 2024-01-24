let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winningConditions = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };

    if (playerSelection === computerSelection) {
        return "It's a tie! Replay the round.";
    } else if (winningConditions[playerSelection] === computerSelection) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }
}

function updateResultDisplay(result) {
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = result;
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResultDisplay(result);

    // THis is display running score
    const scoreDisplay =document.getElementById('scoreDisplay');
    scoreDisplay.textContent= 'Player: ${playerScore} | ComputerScore}';

    // this statements righ here checks for a winner
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner(){
    const winnerDisplay = document.getElementById('winnerDisplay');
    if (playerScore === 5) {
        winnerDisplay.textContent = 'Congratulations! You are the winner Champ!';

    } else {
        winnerDisplay.textContent = 'oooh No you Lost .looser. Better luck next round!';

    }

    // This is where the game reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}
function game(playerSelection){
    const computerSelection =getComputerChoice();
const result = playRound(playerSelection, computerSelection);
updateResultDisplay(result);
}

document.getElementById('rockButton').addEventListener('click', function () {
    game('rock');
});

document.getElementById('paperButton').addEventListener('click', function () {
    game('paper');
});

document.getElementById('scissorsButton').addEventListener('click', function () {
    game('scissors');
});

