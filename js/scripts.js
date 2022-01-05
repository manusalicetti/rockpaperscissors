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
};

console.log(computerPlay());

console.log('Scissors' === 'scissors');
