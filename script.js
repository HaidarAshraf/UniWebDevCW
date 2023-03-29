// Global variables
const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-btns');
const questionNumberText = document.getElementById('question-number');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');
const resultsContainer = document.getElementById('results-container');
const restartButton = document.getElementById('restart-btn');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let questionNumber = 0;
let timerInterval;

// Add event listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// Start the quiz
function startQuiz() {
  startTimer();
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  quizContainer.classList.remove('hide');
  setNextQuestion();
}

// Set the next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Show the question and its answer choices
function showQuestion(question) {
  questionContainer.innerText = question.question;
  questionNumberText.innerText = `Question ${questionNumber + 1}`;
  questionNumber++;
  scoreText.innerText = `Score: ${score}`;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

// Reset the state of the question container
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Select the answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    score++;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    clearInterval(timerInterval);
    showResults();
  }
}

// Show the results screen
function showResults() {
  quizContainer.classList.add('hide');
  resultsContainer.classList.remove('hide');
  const percentage = Math.round((score / questions.length) * 100);
  const resultText = percentage >= 70 ? 'Well done!' : 'Better luck next time.';
  resultsContainer.innerHTML = `
    <h2>Quiz completed!</h2>
    <p>You scored ${score} out of ${questions.length} (${percentage}%)</p>
    <p>${resultText}</p>
  `;
}

// Start the timer
function startTimer() {
  let time = 60;
  timerInterval = setInterval(() => {
    time--;
    timerText.innerText = `Time left: ${time}s`;
    if (time === 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);
}

// Reset the quiz
function resetQuiz() {
  resultsContainer.classList.add('hide');
  startButton.classList.remove('hide');
  score = 0;
  questionNumber = 0;
  timerText.innerText = '';
}




var questionBank=[
    //question one
    {
        question : 'What was the first video game?',
        option : ['Tetris','Pong','Mario','Sonic'],
        answer : 'Pong'
    },
    //question two
    {
        question : 'What is the best-selling video game of all time?',
        option : ['Minecraft','Fortnite','GTA V','Super Mario Bros'],
        answer : 'Minecraft',
    },
    //question three
    {
        question : 'Who created the game Fortnite?',
        option : ['Epic Games','Activision','EA Sports','Ubisoft'],
        answer : 'Epic Games',
    },
    //question four
    {
        question : 'What is the best-selling game console of all time?',
        option : ['PS2','Xbox 360','Nintendo Wii','GameCube'],
        answer : 'PS2',
    },
    //question five
    {
        question : 'What is the highest-grossing mobile game of all time?',
        option : ['Candy Crush','Pokemon Go','PUBG','Clash of Clans'],
        answer : 'PUBG',
    },
    //question six
    {
        question : 'Which of the following game series is developed by Blizzard Entertainment?',
        option : ['Assassins Creed','Overwatch','GTA V','Uncharted'],
        answer : 'Overwatch',
    },
    //question seven
    {
        question : 'What is the name of the yellow, circular character that eats dots in a popular arcade game?',
        option : ['Mario','Luigi','Pac-Man','Steve'],
        answer : 'Pac-Man',
    },
    //question eight
    {
        question : 'What is the name of the classic board game where players move their pieces around a board and try to capture their opponents pieces?',
        option : ['Monopoly','Minecraft','Roblox','Chess'],
        answer : 'Chess',
    },
    //question nine
    {
        question : 'Which of the following is NOT a character in the "Mario Kart" series?',
        option : ['Mario','Luigi','Bowser','Sonic'],
        answer : 'Sonic',
    },
    //question ten
    {
        question : 'In what game do players control a character named Kratos and battle gods and mythical creatures?',
        option : ['God of War',' Devil May Cry','Bayonetta','Nioh'],
        answer : 'God of War',
    }
]