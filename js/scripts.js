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

let game = (computer, player) => {
  let playerSelection = prompt('Write "paper, rock or scissors"');
  player = playerSelection.toLocaleLowerCase();
  computer = computerPlay();

  if ((computer == 'scissors' && player == 'scissors') || (computer == 'rock' && player == 'rock') || (computer == 'paper' && player == 'paper')) {
    return 'Tie! Play again!';
  } else if (computer == 'scissors' && player == 'rock') {
    return 'You won! Rock breaks scissors';
  } else if (computer == 'rock' && player == 'paper') {
    return 'You won! Paper wraps rock';
  } else if (computer == 'paper' && player == 'scissors') {
    return 'You won! Scissors cut paper';
  } else if (computer == 'scissors' && player == 'paper') {
    return 'You lost! Scissors cut paper';
  } else if (computer == 'rock' && player == 'scissors') {
    return 'You lost! Rock breaks scissors';
  } else if (computer == 'paper' && player == 'rock') {
    return 'You lost! Paper wraps rock';
  } else game();
};

console.log(game());
