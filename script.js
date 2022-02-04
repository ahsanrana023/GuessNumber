'use strict';
// document.querySelector('body').style.backgroundColor = '#badc58';
let score = 10;
let highScore = 0;
let secretKey = Math.trunc(Math.random() * 10) + 1;
console.log(secretKey);
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#130f40';
  score = 10;
  secretKey = Math.trunc(Math.random() * 10) + 1;
  console.log(secretKey);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guessing').textContent = 'Start Guessing ...';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.guessing').textContent = 'Please select a';
  } else if (guess === secretKey) {
    document.querySelector('body').style.backgroundColor = '#badc58';
    document.querySelector('.guessing').textContent = '🎉 You won 🎉';
    if (score > highScore) {
      highScore = score;
      // console.log(highScore);
      document.querySelector('.high').textContent = highScore;
    }
  } else if (guess > secretKey) {
    document.querySelector('.guessing').textContent = '📈 Too high';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guessing').textContent = '😒 You Lost the game';
    }
  } else if (guess < secretKey) {
    document.querySelector('.guessing').textContent = '📉 Too Low';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guessing').textContent = '😒 You Lost the game';
    }
  }

  //
});
// document.querySelector('.main-heading').style.color = '#badc58';
document.querySelector('.score').textContent = score;
document.querySelector('.high').textContent = highScore;
// document.querySelector('.guess').value = score;
