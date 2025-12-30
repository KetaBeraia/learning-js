const prompt = require('prompt-sync')();

//this is a simple random number guesser game, where the user has to guess a number.

const targetNumber =  10 + Math.round(Math.random() * 90); //generate a random number between 10 and 100
console.log("Welcome to the Random Number Guesser!"); //welcome message

let guesses = 0;//initialize guesses counter

while(true){//infinite loop until the user guesses the correct number
    guesses += 1;//increment guesses counter
    const guess = Number(prompt("Guess the number (0-100): "))//prompt user for a guess and convert it to a number
    if(guess < targetNumber){
        console.log("Your guess is too low!");//if the guess is lower than the target number
    } else if (guess === targetNumber) {
        console.log("YOU GOT IT RIGHTT!")//if the guess is correct
        console.log("you guessed the number in", guesses, "guesses");//print number of guesses taken
        break//exit the loop if the guess is correct
    }else{
        console.log("Your guess is too high!");//if the guess is higher than the target number
    }
}

//end of the game:)