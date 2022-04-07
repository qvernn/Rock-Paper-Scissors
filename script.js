function computerPlay() {
    select = ['Rock','Paper','Scissors'];
    compHand = select[Math.floor(Math.random()*select.length)];
    return compHand;
}

function playerPlay() {
    playerChoose = prompt("Rock, Paper, or Scissors?",'');
    playerChoose = playerChoose.charAt(0).toUpperCase + playerChoose.slice(1);
    return playerChoose;
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();