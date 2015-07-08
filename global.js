var q1 = {
  question: "Hector Lavoe was born in:",
  choice1: "Puerto Rico",
  choice2: "Cuba",
  choice3: "Brazil"
  right_answer: 
};
var q2 = {
  question: "Hector Lavoe died in what year?",
  choice1: 1993,
  choice2: 1979,
  choice3: 2012
};

var q3 = {
  question: "What is Hector Lavoe's signature song?",
  choice1: "El Cantante",
  choice2: "El Periódico de Ayer",
  choice3: "Bandolera"
};

var question = document.getElementById("question");
question.innerText = q1.question;

var choices = document.getElementById("choices");
choices.innerText=q1.choice1 + ", " + q1.choice2 + ", " + q1.choice3;

var answer = document.getElementById("answer");

var given_answer = function(){
  return answer.value;
}

