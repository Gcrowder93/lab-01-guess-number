# Alchemy Bootstrap Template

## Making a plan

### Html Element
* header -- static
* user input -- static
* button -- static
user message -- dynamic and change based on the user gyess

### State
* userGuess -- will hold the value of the input field
* randomNum -- will be generate at the start of every game
* numGuesses -- number of guesses -- incremented every time the user clicks the button
* userMessage
     -'You're correct': userGuess === randomNum
     -'Guess too high': userGuess > randomNum
     'Guess too low': userGuess < randomNum
     'No more guesses': numGuesses > 4
     -'Invalid guess': if input is >20 or not a number(stretch)

### PsuedoCode for Event
```javascript
// what DOM elements needed

// what state do i need

// what events am i listening for
// on button click do the following:
// decrement or increment the guess count
// get the value of the user guess from the input
// CONVERT INPUT TO A NUNMBER
// compare user guess to randomNumber
// if(userGuess === randomNum) -- display you won!
// else if (numGuesses === 4 ) --display you lost, out og guesses
// else if (userGuess > randomNum) -- display guess too high!
// melse if (userGuess < randomNum) -- display guess too low
```

