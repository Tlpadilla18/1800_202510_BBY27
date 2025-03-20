document.getElementById("spinButton").addEventListener("click", spinWheel);

const trivia = [
    "Bananas are berries, but strawberries aren’t!",
    "Octopuses have three hearts.",
    "What would you do if you were forgetten by the world?",
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "The shortest war in history lasted 38 minutes.",
    "The first oranges weren’t orange.",
    "The unicorn is the national animal of Scotland.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
];


let triviaCopy = [...trivia]; // Create a copy of the trivia array

function spinWheel() {
  // Random background color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;

  // Random trivia
  const output = document.getElementById("output");
  if (triviaCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * triviaCopy.length);
    output.textContent = triviaCopy[randomIndex];
    triviaCopy.splice(randomIndex, 1); // Remove the used trivia from the copy
    if (triviaCopy.length === 0) {
      // Refill the trivia array when all quotes have been used
      triviaCopy = [...trivia];
    }
  } else {
    output.textContent = "Spin again to see trivia!";
  }
}
