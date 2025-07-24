'use strict';



let score = 20;
let highScore = 0;

// functions
const randomize = function () {
    return Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
            document.querySelector('.message').textContent = message;
}

const setNumber = function (num) {
    document.querySelector('.number').textContent = num;
}

const setScore = function (sc) {
    document.querySelector('.score').textContent = sc;
}
const updateCss = function (bg, width) {
        document.querySelector('body').style.backgroundColor = bg;
        document.querySelector('.number').style.width = width;
}
let secretNumber = randomize();

// the gameplay event handler 

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof (guess));
    // when there's no input
    if (!guess) {
        displayMessage('No Number..! 🤷‍♂️');
        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number! 👌');
        setNumber(secretNumber);
        updateCss('#60b347', '30rem');
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too HIGH 🤣' : 'Too LOW 😂');
            score--;
            setScore(score);
        } else {
            displayMessage('Oops! You lost the game 😓')
            score--;
            setScore(0);
        }
    }
});
// reset the game and preserve the highscore event

document.querySelector('button').addEventListener('click', function () {
    secretNumber = randomize();
    score = 20;
    setNumber('?')
    setScore(score);
    displayMessage('Start guessing... 🤷‍♂️');
    document.querySelector('.guess').value = '';
    updateCss('#222','15rem');


})