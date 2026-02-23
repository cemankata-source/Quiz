const questions = [
  {
    question: "Siapa presiden pertama Malaysia?",
    options: ["Tunku Abdul Rahman", "Abdul Razak", "Mahathir"],
    answer: "Tunku Abdul Rahman"
  },
  {
    question: "Apakah ibu kota Jepun?",
    options: ["Tokyo", "Osaka", "Kyoto"],
    answer: "Tokyo"
  },
  {
    question: "Bahasa pengaturcaraan yang paling popular untuk web?",
    options: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(li, q.answer));
    optionsEl.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(selectedLi, correctAnswer) {
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(li => li.removeEventListener("click", () => {})); // disable click

  if (selectedLi.textContent === correctAnswer) {
    selectedLi.classList.add("correct");
    score++;
  } else {
    selectedLi.classList.add("wrong");
    // highlight jawapan betul
    allOptions.forEach(li => {
      if (li.textContent === correctAnswer) li.classList.add("correct");
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz selesai!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Score: ${score} / ${questions.length}`;
  }
});

loadQuestion();