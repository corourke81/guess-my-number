'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// To display if guess is too high, too low, and so on
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// On clicking check box, guess is input in guess box
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  }
  // If guess is incorrect and player has enough lives
  if (guess !== secretNumber && score >= 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } // If guess is incorrect and no lives left
  if (guess !== secretNumber && score === 0) {
    displayMessage('All lives gone!');
    document.querySelector('.score').textContent = 0;
  }
  // If guess is correct
  if (guess === secretNumber) {
    displayMessage('Correct Answer!');
    // reveal secret number
    document.querySelector('.number').textContent = secretNumber;
    // update highScore
    highScore = Math.max(highScore, score);
    // change display
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

// On clicking again, restore settings with a new secret number
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
