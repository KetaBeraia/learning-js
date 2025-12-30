//i'm making here a quiz, that will ask the user 3 questions and give them a score based on their answers.
const prompt = require('prompt-sync')(); //created a prompt variable to take user input
console.log("Welcome to the Quiz!"); //welcoming message in console

//question 1

const answer1 = prompt("What is the capital of Georgia?");//asking question1
const correct_answer1 = "TBILISI";//correct answer for question 1

if (answer1.toUpperCase() === correct_answer1) { //checking if the answer is correct and making it case insensitive
    console.log("Your answer is correct! :3"); //if correct, print Correct!
} else {
    console.log("Your answer is incorrect. :(  The correct answer is Tbilisi."); //if incorrect, print Incorrect!
}

//question 2

const answer2 = prompt("What grade is Keta in?"); //asking question2
const correct_answer2 = "10TH"; //correct answer for question 2

if (answer2.toUpperCase() === correct_answer2) { //checking if the answer is correct
    console.log("Your answer is correct! :3"); //if correct, print Correct!
} else {
    console.log("Your answer is incorrect. :(  The correct answer is 10th."); //if incorrect, print Incorrect!
}


//qustion 3

const answer3 = prompt("What is Keta's favourite colour?"); //asking question2
const correct_answer3 = ["YELLOW", "PINK", "BABY BLUE"]; //correct answers for question 3, multiple correct answers possible

if (correct_answer3.includes(answer3.toUpperCase())) { //checking if the answer is correct
    console.log("Your answer is correct! :3"); //if correct, print Correct!
} else {
    console.log("Your answer is incorrect. :(  The correct answer is yellow, pink or baby blue."); //if incorrect, print Incorrect!
}


//scoring system

let score = 0; //initializing score variable
if (answer1.toUpperCase() === correct_answer1) {
    score += 1; //increment score by 1 if answer1 is correct
}
if (answer2.toUpperCase() === correct_answer2) {
    score += 1; //increment score by 1 if answer2 is correct
}
if (correct_answer3.includes(answer3.toUpperCase())) {
    score += 1; //increment score by 1 if answer3 is correct
}

console.log(`Your total score is: ${score}/3`); //displaying the total score

//we can also do it in other way
//let totalScore = score; // use the score you already calculated
//const totalQuestions = 3;
//console.log(`Your total score is: ${totalScore}/${totalQuestions} (${(totalScore/totalQuestions * 100).toFixed(0)}%)`);