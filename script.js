'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ` Correct Number!`;

// document.querySelector('h1').textContent = 'geuss the number!';

// document.querySelector('.guess').value = 19;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess > number && guess <= 20) {
    document.querySelector('.message').textContent = 'too hight';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'you must choose a number less than 20 ';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (score <= 0) {
    document.querySelector('.message').textContent = 'you lost the game';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
});
