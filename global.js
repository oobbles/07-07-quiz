var q1 = {
  question: "Hector Lavoe was born in:",
  choice1: "(1) Puerto Rico",
  choice2: "(2)Cuba",
  choice3: "(3)Brazil",
  answer: 1
};
var q2 = {
  question: "Hector Lavoe died in what year?",
  choice1: "(1) 1993",
  choice2: "(2) 1979",
  choice3: "(3) 2012",
  answer: 1
};

var q3 = {
  question: "What is Hector Lavoe's signature song?",
  choice1: "(1) El Cantante",
  choice2: "(2) El Periodico de Ayer",
  choice3: "(3) Bandolera",
  answer: 1
};
var total_right = 0;

var questions = [q1, q2, q3];

var current_question = 0;

var question_result = document.getElementById("question_result");

var question = document.getElementById("question");
question.innerText = questions[current_question].question;

var choices = document.getElementById("choices");
choices.innerText=questions[current_question].choice1 + ", " + questions[current_question].choice2 + ", " + questions[current_question].choice3;

var answer = document.getElementById("answer");
var given_answer = function(){
  return answer.value;
}
var next_question = function(){
  if(current_question == questions.length-1){
    question_result.innerText="Final Right: " + total_right;
    answer.value=null;
    question.innerText = "";
    choices.innerText="";
  }
  else{
  current_question++;
  answer.value=null;
  question.innerText = "";
  question_result.innerText ="";
  choices.innerText="";
  question.innerText=questions[current_question].question;
  choices.innerText=questions[current_question].choice1 + ", " + questions[current_question].choice2 + ", " + questions[current_question].choice3;
    }
  }

var is_correct_answer = function(answer_text){
  if (answer_text==questions[current_question].answer){
  total_right++;
  return true;
  }
  else {
    return false;
  }
}

var update_question_result = function(correct){
  if (correct==true){
    question_result.innerText = "Success!";
  }
  else {
    question_result.innerText = "Wrong!";
  }
}

var process_answer_submission = function(){
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}

var submitter = document.getElementById("submitter");
submitter.onclick = process_answer_submission;


var next = document.getElementById("next");
next.onclick = next_question;
