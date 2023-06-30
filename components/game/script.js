// Set the initial score and time remaining
let score = 0;
let timeRemaining = 10;

// Get the button and timer elements
const clickButton = document.getElementById('click-button');
const timeRemainingElement = document.getElementById('time-remaining');
const scoreElement = document.getElementById('score');

// Add an event listener to the button
clickButton.addEventListener('click', () => {
  // Increment the score
  score++;
  scoreElement.textContent = score;
});

// Set an interval to update the timer every second
const intervalId = setInterval(() => {
  // Decrement the time remaining
  timeRemaining--;
  timeRemainingElement.textContent = timeRemaining;

  // If the time has run out, stop the game
  if (timeRemaining === 0) {
    clearInterval(intervalId);
    clickButton.disabled = true;
    alert(`Time's up! Your score is ${score}.`);
  }
}, 1000);