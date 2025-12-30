const prompt = require('prompt-sync')();

// Rock Paper Scissors
// 0 = Rock, 1 = Paper, 2 = Scissors

console.log("Rock, Paper, Scissors Game!");

const input = prompt("Enter your choice (rock/paper/scissors): ").toUpperCase();
let player;

// Map input to number
if (["ROCK", "R", "ROCKS"].includes(input)) {
    player = 0;
} else if (["PAPER", "P", "PAPERS"].includes(input)) {
    player = 1;
} else if (["SCISSORS", "S", "SCISSOR"].includes(input)) {
    player = 2;
} else {
    console.log("Invalid input! Please enter rock, paper, or scissors.");
    process.exit(); // Stop the program
}

const computer = Math.floor(Math.random() * 3);
const choices = ["Rock", "Paper", "Scissors"];

console.log(`You chose: ${choices[player]}`);
console.log(`Computer chose: ${choices[computer]}`);

// Determine winner
if (player === computer) {
    console.log("Draw!");
} else if (
    (player === 0 && computer === 2) || // Rock beats Scissors
    (player === 1 && computer === 0) || // Paper beats Rock
    (player === 2 && computer === 1)    // Scissors beats Paper
) {
    console.log("You won!");
} else {
    console.log("Computer won!");
}

//this also lets the user input their choice and includes input validation.
//at the same time it is cleaner
//but the main thing in this version is that user can input rock, paper or scissors instead of numbers