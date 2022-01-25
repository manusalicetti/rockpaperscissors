let computerScore = 0;
let playerScore = 0;

let getRandom = (min = 1, max = 4) => {
  return Math.round(Math.random() * (max - min) + min);
};

let computerPlay = () => {
  let number = getRandom();
  if (number == 3) {
    return 'scissors';
  } else if (number == 2) {
    return 'rock';
  } else {
    return 'paper';
  }
};

let game = (computerSelection, playerSelection) => {
  if (
    (computerSelection == 'scissors' && playerSelection == 'scissors') ||
    (computerSelection == 'rock' && playerSelection == 'rock') ||
    (computerSelection == 'paper' && playerSelection == 'paper')
  ) {
    return 'Tie! Play again!';
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    playerScore += 1;
    return 'You won! Rock breaks scissors';
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
    playerScore += 1;
    return 'You won! Paper wraps rock';
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    playerScore += 1;
    return 'You won! Scissors cut paper';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    computerScore += 1;
    return 'You lost! Scissors cut paper';
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    computerScore += 1;
    return 'You lost! Rock breaks scissors';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    computerScore += 1;
    return 'You lost! Paper wraps rock';
  } else game();
};

//*Parte nueva*/

results = document.querySelector('.results');
resultsText = document.createElement('h2');
resultsText.style.color = '#b8b50c';
resultsText.style.textAlign = 'center';

const buttons = document.querySelectorAll('.button');
const playerScoreParagraph = document.querySelector('.player-score');
const computerScoreParagraph = document.querySelector('.computer-score');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    resultsText.textContent = game(computerPlay(), button.dataset.game);
    results.appendChild(resultsText);
    playerScoreParagraph.textContent = playerScore;
    computerScoreParagraph.textContent = computerScore;
  });
});
