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

