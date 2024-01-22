function  getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices [Math.floor (math.random() * choices.length)];
    console.log(choices)

}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.tolowerCase();
    let winningCondition = {'rock': 'scissors', 'paper':'rock', 'scissors': 'Paper' }
    if (playerSelection === computerSelection.tolowerCase()){
        return "It's a tie! Replay the round.";
    }
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// let result = (winningConditions[playerSelection] === computerSelection.tolowerCase())
// 
function game(){
    
}
}
