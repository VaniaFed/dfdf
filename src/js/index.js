'use strict';

window.onload = function () {
    // Addition functions
    const randNum = function (min, max) {
        let randNum = min - 0.5 + Math.random() * (max - min + 1);
        randNum = Math.round(randNum);
        return randNum;
    };


    // Main functions
    const startGame = function() {
        const modalStart = document.querySelector('.container__modal__start'),
              modalEnd = document.querySelector('.container__modal__end'),
              modalBg = document.querySelector('.modal_bg'),
              colorItem = document.querySelectorAll('.color-item'),
              btnAnswerYes = document.querySelector('#answer_yes'),
              btnAnswerNot = document.querySelector('#answer_not'),
              textList = ['Красный', 'Синий', 'Фиолетовый', 'Розовый', 'Черный', 'Оранжевый', 'Зеленый'],
              colorList = [
                  'rgb(244, 67, 54)',
                  'rgb(33, 150, 243)',
                  'rgb(156, 39, 176)',
                  'rgb(233, 30, 99)',
                  'rgb(0, 0, 0)',
                  'rgb(255, 152, 0)',
                  'rgb(76, 175, 80)'
              ];

        const hiddenModal = function (el) {
            el.classList.add('hidden');
        };

        const showModal = function (el) {
            el.classList.remove('hidden');
        };

        const drawText = function () {
            for (let i = 0; i < colorItem.length; i++) {
                let currentText = randNum(0, textList.length - 1);
                colorItem[i].innerText = textList[currentText];
            }
        };

        const drawColor = function () {
            for (let i = 0; i < colorItem.length; i++) {
                let currentColor = randNum(0, colorList.length - 1);
                colorItem[i].style.color = colorList[currentColor];
            }
        };

        const nextLevel = function () {
            drawText();
            drawColor();
        };

        const followTheAnswer = function () {
            const itemTextColor = document.querySelectorAll('.color_text'),
                itemColorValue = document.querySelectorAll('.color_value'),
                scoreEl = document.querySelector('.score');

            let score = 0;

            const indexText = function (arr, el) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === el) {
                        return i;
                    }
                }
                return -1;
            };

            const indexColor = function (arr, el) {
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i] === el) {
                        return i;
                    }
                }
                return -1;
            };

            const checkAnswer = function (answer) {
                for (let i = 0; i < itemColorValue.length; i++) {
                    let currentTextColor = itemTextColor[i].innerHTML,
                        currentColorValue = itemColorValue[i].style.color;

                    let currentIndexText = indexText(textList, currentTextColor),
                        currentIndexColor = indexColor(colorList, currentColorValue);

                    if (currentIndexText === currentIndexColor && answer === 1) {
                        return 1;
                    } else if (currentIndexText !== currentIndexColor && answer === 0) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            };

            const correctAnswer = function () {
                score += 100;
                scoreEl.textContent = 'Score: ' + score;
                nextLevel();
            };

            const incorrectAnswer = function () {
                score -= 100;
                scoreEl.textContent = 'Score: ' + score;
                nextLevel();
            };

            const giveAnswerYes = function () {
                if (checkAnswer(1)) {
                    correctAnswer();
                } else {
                    incorrectAnswer();
                }
            };

            const giveAnswerNot = function () {
                if (checkAnswer(0)) {
                    correctAnswer();
                } else {
                    incorrectAnswer();
                }
            };

            const pressYes = function () {
                giveAnswerYes();
                // btnAnswerYes.removeEventListener('click', pressYes);
            };

            const pressNot = function () {
                giveAnswerNot();
                // btnAnswerNot.removeEventListener('click', pressNot);
            };

            const pressKeydownYes = function (e) {
                if (e.keyCode === 37) {
                    giveAnswerYes();
                    // window.removeEventListener("keydown", pressKeydownYes);
                }
            };

            const pressKeydownNot = function (e) {
                if (e.keyCode === 39) {
                    giveAnswerNot();
                    // window.removeEventListener('keydown', pressKeydownNot);
                }
            };

            btnAnswerYes.addEventListener('click', pressYes);
            btnAnswerNot.addEventListener('click', pressNot);

            window.addEventListener("keydown", pressKeydownYes);
            window.addEventListener('keydown', pressKeydownNot);
        };

        hiddenModal(modalStart);
        hiddenModal(modalBg);

        drawText();
        drawColor();

        followTheAnswer();

        this.removeEventListener('click', startGame);
    };


    const followTheTime = function () {

    };

    const gameOver = function () {

    };


    const btnStartGame = document.querySelector('#modal_start');

    let eventStartGame = btnStartGame.addEventListener('click', startGame);
};
