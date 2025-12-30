let player = 0;
const computer = Math.floor(Math.random() * 3);

if (player === 2 && computer === 1) {
  console.log("Player picked:      Scissors");
  console.log("Computer picked:    Paper");
  console.log("The Player won");
} else if (player === 2 && computer === 2) {
  console.log("Player picked:      Scissors");
  console.log("Computer picked:    Scissors");
  console.log("No one won! Tie");
} else if (player === 2 && computer === 0) {
  console.log("Player picked:      Scissors");
  console.log("Computer picked:    Rock");
  console.log("The computer won");
} else if (player === 1 && computer === 0) {
  console.log("Player picked:      Paper");
  console.log("Computer picked:    Rock");
  console.log("The player won");
} else if (player === 1 && computer === 1) {
  console.log("Player picked:      Paper");
  console.log("Computer picked:    Paper");
  console.log("No one won! Tie");
} else if (player === 1 && computer === 2) {
  console.log("Player picked:      Paper");
  console.log("Computer picked:    Scissors");
  console.log("Computer won!");
} else if (player === 0 && computer === 0) {
  console.log("Player picked:      Rock");
  console.log("Computer picked:    Rock");
  console.log("No one won! Tie");
} else if (player === 0 && computer === 1) {
  console.log("Player picked:      Rock");
  console.log("Computer picked:    Paper");
  console.log("Computer won!");
} else if (player === 0 && computer === 2) {
  console.log("Player picked:      Rock");
  console.log("Computer picked:    Scissors");
  console.log("The player won!");

  // 0 - Rock
  // 1 - Paper
  // 2 - Scissors
}//this is a simple rock paper scissors game where
// the player can choose between rock, paper or scissors
// by changing the value of the "player" variable (0, 1 or 2).
// The computer randomly selects its choice.
// The game then compares the choices and declares the winner.


/* // Rock Paper Scissors 🫲
// Codédex

// 0 = Rock
// 1 = Paper
// 2 = Scissors

const player = 2;
const computer = Math.floor(Math.random() * 3);

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
} */
// this is simplier version which i didnt use.
