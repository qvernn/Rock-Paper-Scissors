function computerPlay() {
    const hand = document.querySelector('.computer-hand > .hand');
    const select = ['Rock','Paper','Scissors'];
    let compHand = select[Math.floor(Math.random()*select.length)];
    hand.textContent = compHand;
    return compHand;
}

function playerPlay() {
    const buttons = document.querySelectorAll('button');
    const hand = document.querySelector('.player-hand > .hand');
    buttons.forEach((button) => {
        button.addEventListener('click',(e) => {
            hand.textContent = e.path[0].textContent;
        })
    });
    console.log(typeof(hand.textContent));
    return hand.textContent;
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