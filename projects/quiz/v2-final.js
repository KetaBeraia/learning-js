const prompt = require('prompt-sync')();

const MESSAGES = { //message templates
    welcome: "Welcome to the Quiz!", //welcoming message
    correct: "Correct! :3", //message for correct answer
    incorrect: (answer) => `You got it wroong!:(. The correct answer is ${answer}.`,//message for incorrect answer
    finalScore: (score, total) => `Your final score: ${score}/${total}` //final score message
};

const questions = [
    {
        question: "What is the capital of Georgia?",//question 1
        answers: ["TBILISI"],//correct answers for question 1
        correctAnswerText: "Tbilisi"//text to show for correct answer
    },
    {
        question: "What grade is Keta in?",//question 2
        answers: ["10TH", "10"],//correct answers for question 2
        correctAnswerText: "10th"//text to show for correct answer
    },
    {
        question: "What is Keta's favourite colour?",//question 3
        answers: ["YELLOW", "PINK", "BABY BLUE"],//correct answers for question 3
        correctAnswerText: "yellow, pink, or baby blue"//text to show for correct answer
    }
];

function runQuiz(questions) { //function to run the quiz
    let score = 0;//initialize score variable

    questions.forEach((q) => { //loop through each question
        const answer = prompt(q.question).trim();//ask the question and get user input
        
        if (!answer) {
            console.log("No answer provided. Marking as incorrect."); //if no answers then mark incorrect
            console.log(MESSAGES.incorrect(q.correctAnswerText));
            return;
        }
        
        if (q.answers.includes(answer.toUpperCase())) {//check if answer is correct + upper case
            console.log(MESSAGES.correct);//if correct, print correct message
            score++; //increment score if answer is correct
        } else {
            console.log(MESSAGES.incorrect(q.correctAnswerText));//if incorrect, print incorrect message
        }
    });

    return score;//return final score
}

// Main execution
console.log(MESSAGES.welcome);//welcoming message
const finalScore = runQuiz(questions);//run the quiz and get final score
console.log(MESSAGES.finalScore(finalScore, questions.length));//display final score

//these two js give same result, but the second one is more organized and easier to modify, like i can add question right now and I would not have to husstle a lot!!!