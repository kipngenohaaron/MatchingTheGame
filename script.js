let counter = 0;
let firstSelection = null;
let secondSelection = null;
let move = 0;
let score = 0;
let timer = null;

const scoreDisplay = document.querySelector("#score-counter");
const movesDisplay = document.querySelector("#moves-counter");
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".cards .card");
const restartButton = document.querySelector("#restart-button");
const timerDisplay = document.querySelector("#timer");

function updateScoreDisplay() {
  scoreDisplay.textContent = score;
}

function updateMovesDisplay() {
  movesDisplay.textContent = move;
}

function resetCards() {
  cards.forEach((card) => {
    card.classList.remove("clicked", "checked", "shake", "match");
  });
}

function shuffleCards() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

function startTimer() {
  let seconds = 0;
  timer = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `Timer: ${seconds}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function restartGame() {
  move = 0;
  score = 0;
  updateMovesDisplay();
  updateScoreDisplay();
  resetCards();
  shuffleCards();
  timerDisplay.textContent = "Timer: 0s";
  stopTimer();
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("fruit");
      counter++;
    } else {
      secondSelection = card.getAttribute("fruit");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          `.card[fruit="${firstSelection}"]`
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
        score++; // Increment score for a match
        updateScoreDisplay();
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }

      move++;
      updateMovesDisplay();
    }
  });
});

restartButton.addEventListener("click", restartGame);

// Start the timer when the game begins
startTimer();
