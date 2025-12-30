const prompt = require('prompt-sync')();

// Random number guessing game where the user tries to guess a number between 1-100

const targetNumber = Math.floor(Math.random() * 100) + 1; // generates random number 1-100
console.log("Welcome to the Random Number Guesser!");

let guesses = 0;

while (true) {
    const input = prompt("Guess the number (1-100): ");
    const guess = Number(input);
    
    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Please enter a valid number between 1 and 100.");//between 1 and 100 requires valid number
        continue;
    }
    
    guesses++;//increment guess count
    
    if (guess < targetNumber) {
        console.log("Too low!");
    } else if (guess > targetNumber) {
        console.log("Too high!");
    } else {
        console.log("YOU GOT IT RIGHT!");
        console.log(`You guessed the number in ${guesses} guesses!`);
        break;
    }
}

// in this version there is validation to ensure the user inputs a number between 1 and 100, if not, it prompts them again without counting it as a guess.