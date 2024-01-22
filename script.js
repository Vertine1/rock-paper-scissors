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


const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}
