
let randomNumber = Math.floor(Math.random() * 20) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const highorlow = document.querySelector('.highorlow');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    guesses.style.backgroundColor = 'violet';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Nailed it!';
    lastResult.style.backgroundColor = 'green';
    highorlow.textContent = '';
    setGameOver();
  } else if (guessCount === 4) {
    lastResult.textContent = 'You lost';
    highorlow.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Nope! Guess Again..';
    lastResult.style.backgroundColor = 'yellow';
    if(userGuess < randomNumber) {
      highorlow.textContent = 'Thats too low';
      highorlow.style.backgroundColor = 'aqua'
    } else if(userGuess > randomNumber) {
      highorlow.textContent = 'Thats too high!';
      highorlow.style.backgroundColor = 'tomato'
    }
  }
  
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resetButton.id= 'resetbutton';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
  resetButton.style.marginLeft = '365px';
}


function resetGame() {
  guessCount = 1;
  

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);


  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  

  lastResult.style.backgroundColor = 'white';


  randomNumber = Math.floor(Math.random() * 100) + 1;
}

const resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}

guesses.style.boxShadow = '2px 2px 6px black';
lastResult.style.boxShadow = '3px 3px 6px black';
highorlow.style.boxShadow = '3px 3px 6px black';





