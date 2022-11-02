//We have achieved peak laziness

var URLs = ["https://i.imgur.com/N7Rjyzu.jpg", "https://i.imgur.com/BCifP4X.jpg", "https://i.imgur.com/Rv53uEw.jpg", "https://i.imgur.com/ttsF8DS.jpg", "https://i.imgur.com/AIpjuTW.jpg", "https://i.imgur.com/V1ALQKH.jpg", "https://i.imgur.com/b2qKwss.jpg", "https://i.imgur.com/uh5FWd0.jpg", "https://i.imgur.com/0s7lALJ.jpg", "https://i.imgur.com/rfqoJr5.jpg", "https://i.imgur.com/t82mVso.jpg", "https://i.imgur.com/o9FPu5n.jpg", "https://i.imgur.com/OlQIqjc.jpg", "https://i.imgur.com/LmetP6D.jpg", "https://i.imgur.com/42tSAW3.jpg", "https://i.imgur.com/uawGJB6.jpg"];
var selectedColumn;
var currentCard;

for (let i = 0; i < URLs.length; i++) {
  if (i%3 == 0){
    selectedColumn = document.getElementById("left");
  } else if (i%3 == 1) {
    selectedColumn = document.getElementById("center");
  } else {
    selectedColumn = document.getElementById("right");
  }
  
  currentCard = document.createElement("img");
  currentCard.classList.add("card");
  currentCard.src = URLs[i];
  selectedColumn.appendChild(currentCard);
}
