class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
let questions = [
new Question("calcul 10 + 6", [Math.floor(Math.random() * 11) + 5, 10 + 6, Math.floor(Math.random() * 11) + 7,Math.floor(Math.random() * 11) + 3], 10 + 6 ),
new Question("calcul 5 + 6", [Math.floor(Math.random() * 11) + 4,Math.floor(Math.random() * 11) + 7, 5 + 6,Math.floor(Math.random() * 11) + 9], 5 + 6 ),
new Question("calcul 7 + 6", [Math.floor(Math.random() * 11) + 8,Math.floor(Math.random() * 11) + 1,Math.floor(Math.random() * 11) + 2,7 + 6], 7 + 6 ),
new Question("calcul 8 + 6", [Math.floor(Math.random() * 11) + 6,Math.floor(Math.random() * 11) + 5, 8 + 6,Math.floor(Math.random() * 11) + 6], 8 + 6 ),
new Question("calcul 9 + 6", [9 + 6,Math.floor(Math.random() * 11) ,Math.floor(Math.random() * 11) + 7,Math.floor(Math.random() * 11) + 2], 9 + 6 ),
new Question("calcul 1 + 6", [Math.floor(Math.random() * 11) + 8,1 + 6,Math.floor(Math.random() * 11) + 3,Math.floor(Math.random() * 11)], 1 + 6 ),
new Question("calcul 3 + 6", [Math.floor(Math.random() * 11) + 5,Math.floor(Math.random() * 11) + 6, 3 + 6,Math.floor(Math.random() * 11) + 7], 3 + 6 ),
new Question("calcul 4 + 6", [Math.floor(Math.random() * 11),4 + 6,Math.floor(Math.random() * 11) + 3,Math.floor(Math.random() * 11) + 8], 4 + 6 ),
new Question("calcul 2 + 6", [Math.floor(Math.random() * 11) + 5,Math.floor(Math.random() * 11) + 6,Math.floor(Math.random() * 11) + 3,2 + 6], 2 + 6 ),
new Question("calcul 6 + 6", [Math.floor(Math.random() * 11) + 9,Math.floor(Math.random() * 11) + 5, 6 + 6,Math.floor(Math.random() * 11) + 3], 6 + 6 ),
new Question("calcul 0 + 6", [0 + 6,Math.floor(Math.random() * 11) + 2,Math.floor(Math.random() * 11) + 3,Math.floor(Math.random() * 11) + 2], 0 + 6 )

 
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {
    endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // affichage choix + prise en compte du choix
    for(let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();
