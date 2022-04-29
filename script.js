function computerPlay() {
    const select = ['Rock','Paper','Scissors'];
    let compHand = select[Math.floor(Math.random()*select.length)];
    console.log(compHand);
    return compHand;
}

function playerPlay() {
    let playerChoose = '';
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',(e) => {
            playerChoose = `${e.path[0].innerText}`;
            console.log(playerChoose);
        })
    });
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