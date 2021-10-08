
import { winLoss } from './test/functions.js';
let randomNumber = Math.floor(Math.random() * 20) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const highorlow = document.querySelector('.highorlow');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const retort = document.getElementById('retort');
const remainingGuessElement = document.getElementById('remaining-text');
let wins = 0;
let losses = 0;
let remainingGuess = 3;
let guessCount = 1;
let resetButton;
// Part of track wins/losses
// const winSpanfunc = document.getElementById('wins');
// const lossSpanfunc = document.getElementById('losses');
// let winSpanfunc = 0;
// let lossSpanfunc = 0;
guessField.focus();

console.log(randomNumber);

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
        guesses.style.backgroundColor = 'violet';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'CHECK OUT THE BIG BRAIN ON BRAD';
        lastResult.style.backgroundColor = 'green';
        highorlow.textContent = '';
    } else if (guessCount === 4) {
        lastResult.textContent = 'You lost';
        highorlow.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Nope! Guess Again..';
        lastResult.style.backgroundColor = 'yellow';
        if (userGuess < randomNumber) {
            highorlow.textContent = 'Thats too low';
            highorlow.style.backgroundColor = 'aqua';
        } else if (userGuess > randomNumber) {
            highorlow.textContent = 'Thats too high!';
            highorlow.style.backgroundColor = 'tomato';
        }
    }
        remainingGuessElement.textContent = remainingGuess;
        
    remainingGuess--;
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
    resetButton.id = 'resetbutton';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    resetButton.style.marginLeft = '365px';
    resetButton.addEventListener('click', play);
    retort.wav = Audio.getElementById('retort');
    remainingGuess = 4;
    // part of track wins losses
    // if (userGuess === randomNumber){
    //     return wins++;
    //     } else (guessCount > 4);{
    //     return losses++;
    //     }
}

function play() {
    var retort = document.getElementById('retort');
    retort.play();
    onclick(play);
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
    randomNumber = Math.floor(Math.random() * 20) + 1;
}

const resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
}

guesses.style.boxShadow = '2px 2px 6px black';
lastResult.style.boxShadow = '3px 3px 6px black';
highorlow.style.boxShadow = '3px 3px 6px black';


