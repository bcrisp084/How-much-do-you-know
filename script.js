const startTimer = document.querySelector(".countdown");
let secondsLeft = 60;
const startButton = document.querySelector("#start-btn");
const questionContainerEl = document.querySelector("#question-container");
const questionEl = document.querySelector("#question");
const startButtonContainer = document.querySelector(".startBtn");
const highscoreButton = document.querySelector(".scoring");
let currentQuestionIndex = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  startButtonContainer.classList.add("hide");
  setTime();
  setQuestion(currentQuestionIndex);
}

function setQuestion(question) {
  const currentQuestion = questionList[currentQuestionIndex].question;
  const h1 = document.createElement("h1");
  h1.innerHTML = currentQuestion;
  document.getElementById("currentQuestion").append(h1);
  for (
    let index = 0;
    index < questionList[currentQuestionIndex].answers.length;
    index++
  ) {
    let element = questionList[currentQuestionIndex].answers[index];
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn options");
    btn.setAttribute("data-answer", element);
    btn.innerHTML = element;
    btn.addEventListener("click", function (event) {
      let currentQuestion = questionList[currentQuestionIndex].correctAnswer;
      let currentAnswer = event.target.getAttribute("data-answer");
      if (currentAnswer === currentQuestion) {
        h1.innerHTML = "";
        document.querySelectorAll(".options").forEach((e) => e.remove());
        currentQuestionIndex++;
        var div = document.createElement("div");
        document.getElementById("main").append(div);
        div.innerHTML = "CORRECT";
        setQuestion(currentQuestionIndex);
      } else if (currentAnswer !== currentQuestion) {
        var div = document.createElement("div");
        document.getElementById("main").append(div);
        div.innerHTML = "INCORRECT";
        h1.innerHTML = "";
        document.querySelectorAll(".options").forEach((e) => e.remove());
        currentQuestionIndex++;
        setQuestion(currentQuestionIndex);
      }
      if (currentAnswer !== currentQuestion) {
        secondsLeft = secondsLeft - 10;
      }
    });
    document.getElementById("btn-grid").appendChild(btn);
  }
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    startTimer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //redirect to highscore once game has ended
    }
  }, 1000);
}

const questionList = [
  {
    question: "What transformed the turtles?",
    answers: ["ooze", "Dr. Robotnik", "The Winklevoss twins", "slime"],
    correctAnswer: "ooze",
  },
  {
    question: "Which turtle likes to party?",
    answers: ["Michaelangelo", "Donatello", "Leonardo", "Raphael"],
    correctAnswer: "Michaelangelo",
  },
  {
    question: "Who is the turtles arch nemesis?",
    answers: ["Shredder", "Zak the neutrino", "Splinter", "April o Neil"],
    correctAnswer: "Shredder",
  },
  {
    question: "What is the turtles favorite food?",
    answers: ["sushi", "pizza", "tuna sandwiches", "bananas"],
    correctAnswer: "pizza",
  },
  {
    question: "Who created the ninja turtles?",
    answers: [
      "Mark Hamill",
      "Jim Jenkins",
      "Bert & Ernie",
      "Kevin Eastman & Peter Laird",
    ],
    correctAnswer: "Kevin Eastman & Peter Laird",
  },
  {
    question: "What is the name of the turtle van?",
    answers: ["The sled", "The technodrome", "The party wagon", "The foot ski"],
    correctAnswer: "The party wagon",
  },
];

//figure out what the correct answer is
// figure out if the answer was correct
//    1a.if the answer was correct move on to the next question
//  1b.if the answer was incorrect deduct time from counter than move to next question
//if the game is over
//we prompt the user to enter initials and save score in local storage
//redirect to high score page
