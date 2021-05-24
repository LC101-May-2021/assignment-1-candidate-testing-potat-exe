const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  'Who was the first American woman in space? ',
 'True or false: 5 kilometer == 5000 meters? ',
 '(5 + 3)/2 * 10 = ? ', 
 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
 'What is the minimum crew size for the ISS? ' 
 ];
let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
  ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log('\n');
  return candidateName;

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let n = 0; n < questions.length; n++){
    console.log(questions[n]);
    candidateAnswers[n] = input.question("Your Answer: ");
    console.log("Correct Answer: "+ correctAnswers[n]);
    console.log('\n');
    }
  return candidateAnswers

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //if (candidateAnswers.tolowercase === correctAnswers.tolowercase ){
  //  console.log("Congratulations You got 100% ")
  //}
  let tempAnswer = ''
  let tempSubmit = ''
  let grade = 0
  let n = 0



    while( n < correctAnswers.length){
      tempAnswer = correctAnswers[n]
      tempSubmit = candidateAnswers[n]
        if(tempAnswer.toLowerCase() === tempSubmit.toLowerCase()){
          grade++
        }

      n++

    }
    
 console.log(">>>> Overall Grade: " + grade/correctAnswers.length*100 + '%' + '(' + grade + ' of ' + correctAnswers.length + " responses correct) <<<<")

  if (grade >= 4 ){
    console.log(">>> Status: PASSED <<<")
  }
  else {
    console.log(">>> Status: FAILED <<<")
  }
  
    grade = grade/correctAnswers.length*100
  return grade;
  
  
 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name : " + candidateName)
  askQuestion();

  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};