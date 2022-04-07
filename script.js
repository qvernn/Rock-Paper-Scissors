function computerPlay() {
    const select = ['Rock','Paper','Scissors'];
    let compHand = select[Math.floor(Math.random()*select.length)];
    console.log(compHand);
    return compHand;
}

function playerPlay() {
    let playerChoose = prompt("Rock, Paper, or Scissors?",'');
    playerChoose = playerChoose.charAt(0).toUpperCase() + playerChoose.slice(1);
    console.log(playerChoose);
    return playerChoose;
}

function playRound(playerSelection,computerSelection) {
    let outcome;
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            outcome = `You tied!`;
        } else if (computerSelection === 'Paper') {
            outcome = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            outcome = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Paper') {
            outcome = `You tied!`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            outcome = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'Paper') {
            outcome = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You tied!`;
        }
    }
    return outcome;
}

function game() {
    let playerSelection;
    let computerSelection;
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        if (playRound(playerSelection,computerSelection).includes('win')) {
            playerCounter++;
        } else if (playRound(playerSelection,computerSelection).includes('lose')) {
            computerCounter++;
        }
    }

    if (playerCounter > computerCounter) {
        console.log('You won against the computer!')
    } else if (playerCounter < computerCounter) {
        console.log('You lost against the computer.')
    } else {
        console.log('You tied with the computer.')
    }
}

game();