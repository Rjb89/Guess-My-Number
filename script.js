'use strict';
// this a javascript only challenge from a javaScript course in udemy platform  only pc version and not a clean code  must be implemnt a funtion for display a the messege to make it  clean

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (score <= 0) {
    document.querySelector('.message').textContent = 'you lost the game';
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
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
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
