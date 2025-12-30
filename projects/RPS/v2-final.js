 // Rock Paper Scissors 🫲

// 0 = Rock
// 1 = Paper
// 2 = Scissors

const prompt = require('prompt-sync')();

// Rock Paper Scissors
// 0 = Rock, 1 = Paper, 2 = Scissors

console.log("Rock, Paper, Scissors Game!");
console.log("0 = Rock, 1 = Paper, 2 = Scissors");

const input = prompt("Enter your choice (0-2): ");
const player = parseInt(input, 10);
const computer = Math.floor(Math.random() * 3);

// Validate input
if (isNaN(player) || player < 0 || player > 2) {
    console.log("Invalid input! Please enter 0, 1, or 2.");
} else {
    const choices = ["Rock", "Paper", "Scissors"];
    console.log(`You chose: ${choices[player]}`);
    console.log(`Computer chose: ${choices[computer]}`);
}
if (player === 0) {
  if (computer === 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } else {
    console.log("An error occurred");
  }
} else {
  console.log("An error occurred");
} 
// this is simplier version which i didnt use in the first try.
//this also lets the user input their choice and includes input validation.
