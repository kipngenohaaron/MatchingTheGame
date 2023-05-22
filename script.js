let counter = 0;
let firstSelection = null;
let secondSelection = null;
let isAnimating = false;
let move = 0;

const movesDisplay = document.querySelector("#moves-counter");
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".cards .card");
// Function to update the moves counter display
function updateMovesDisplay() {
  movesDisplay.textContent = move;
}
(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() *12);
      card.style.order = randomPos;
    });
  })();
// Shuffle the cards on page load
// window.addEventListener("DOMContentLoaded", () => {
//   shuffleCards();
//   updateMovesDisplay();
// });
function match(cardOne , cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        score.innerHTML = parseInt(score.innerHTML) + 1
        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
        cardOne.classList.add('match')
        cardTwo.classList.add('match')
    }else{
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 1000);
    }
}
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
          ".card[fruit='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } 
      else {
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
    }
  });
});
function match(cardOne , cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        score.innerHTML = parseInt(score.innerHTML) + 1
        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
        cardOne.classList.add('match')
        cardTwo.classList.add('match')
    }else{
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 1000);
    }
}