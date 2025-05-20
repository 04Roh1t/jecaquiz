let timer;
let timeLeft = 300; // 5 minutes in seconds
let currentIndex = 0;
let score = 0;
let currentQuiz = [];
let selectedTopic = "";

function startQuiz(topic) {
  selectedTopic = topic;
  currentQuiz = quizData[topic];
  currentIndex = 0;
  score = 0;
  switchPage("quiz-page");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = currentQuiz[currentIndex];
  document.getElementById("quiz-topic").innerText = `${selectedTopic} - Question ${currentIndex + 1}`;
  document.getElementById("question-text").innerText = question.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = '';
  question.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (!currentQuiz || currentQuiz.length === 0) return;

  const question = currentQuiz[currentIndex];
  const optionsDiv = document.getElementById("options");
  const buttons = optionsDiv.querySelectorAll("button");

  // Prevent double clicking
  if ([...buttons].some(btn => btn.disabled)) return;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    }
  });

  if (index !== question.correct) {
    buttons[index].style.backgroundColor = "red";
    buttons[index].style.color = "white";
  } else {
    score++;
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }


function showResult() {
    clearInterval(timer);
  document.getElementById("score-text").innerText = `Your total score is: ${score}`;
  switchPage("result-page");
}

function restartQuiz() {
  startQuiz(selectedTopic);
}

function goBackToWelcome() {
    clearInterval(timer);
  switchPage("welcome-page");
}

function switchPage(id) {
  document.querySelectorAll(".container").forEach(div => div.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function startTimer() {
    clearInterval(timer); // Ensure no previous timer is running
    timeLeft = 300; // Reset to 5 minutes
    updateTimer(); // Set initial display
    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up!");
        showResult();
      }
    }, 1000);
  }
  
  function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById("timer").innerText = `Time Left: ${minutes}:${seconds}`;
  }
  
