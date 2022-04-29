function computerPlay() {
    const hand = document.querySelector('.computer-hand > .hand');
    const select = ['Rock','Paper','Scissors'];
    let compHand = select[Math.floor(Math.random()*select.length)];
    hand.textContent = compHand;
    return compHand;
}

function playRound(playerSelection,computerSelection) {
    let outcome;
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            outcome = `You tied!`;
        } else if (computerSelection === 'Paper') {
            outcome = `You lose!`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You win!`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            outcome = `You win!`;
        } else if (computerSelection === 'Paper') {
            outcome = `You tied!`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You lose!`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            outcome = `You lose!`;
        } else if (computerSelection === 'Paper') {
            outcome = `You win!`;
        } else if (computerSelection === 'Scissors') {
            outcome = `You tied!`;
        }
    }
    return outcome;
}

function game() {
    const buttons = document.querySelectorAll('button');
    const playerHand = document.querySelector('.player-hand > .hand');
    const roundResult = document.querySelector('.round-result');

    const playerScore = document.querySelector('.player-score > .score');
    playerScore.textContent = 0;
    const computerScore = document.querySelector('.computer-score > .score');
    computerScore.textContent = 0;

    const WINCONDITION = 5;
    let playerChoice;
    let computerChoice;
    

    buttons.forEach((button) => {
        button.addEventListener('click',() => {
                playerChoice = button.textContent;
                playerHand.textContent = playerChoice;

                computerChoice = computerPlay();

                roundResult.textContent = playRound(playerChoice,computerChoice)

                if (roundResult.textContent.includes('win')) {
                    playerScore.textContent++;
                } else if (roundResult.textContent.includes('lose')) {
                    computerScore.textContent++;
                }

                if (playerScore.textContent == WINCONDITION) {
                    roundResult.textContent = 'You won against the computer!';

                } else if (computerScore.textContent == WINCONDITION) {
                    roundResult.textContent = 'You lost against the computer.';
                }
        })
    });
}

game();
