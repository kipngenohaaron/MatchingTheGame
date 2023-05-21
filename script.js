let counter = 0;
let firstSelection = null;
let secondSelection = null;
let isAnimating = false;
let move = 0;

const movesDisplay = document.querySelector("#moves-counter");
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".cards .card");
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
    }
  });
});