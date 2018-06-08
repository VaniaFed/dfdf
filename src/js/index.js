'use strict';

window.onload = function () {
    // Addition functions
    const randNum = function (min, max) {
        let randNum = min - 0.5 + Math.random() * (max - min + 1);
        randNum = Math.round(randNum);
        return randNum;
    };

    const timer = {
        time: 60,
        tick: function () {
            return this.time -= 1;
        }
    };

    let myTimer = timer;

    // Main functions
    const startGame = function() {
        const modalStart = document.querySelector('.container__modal__start'),
              modalBg = document.querySelector('.modal_bg'),
              colorItem = document.querySelectorAll('.color-item'),
              btnAnswerYes = document.querySelector('#answer_yes'),
              btnAnswerNot = document.querySelector('#answer_not'),
              itemTextColor = document.querySelectorAll('.color_text'),
              itemColorValue = document.querySelectorAll('.color_value'),
              textList = [
                  'Красный',
                  'Синий',
                  'Фиолетовый',
                  // 'Розовый',
                  'Черный',
                  'Оранжевый',
                  'Зеленый'
              ],
              colorList = [
                  'rgb(244, 67, 54)',
                  'rgb(33, 150, 243)',
                  'rgb(156, 39, 176)',
                  // 'rgb(233, 30, 99)',
                  'rgb(0, 0, 0)',
                  'rgb(255, 152, 0)',
                  'rgb(76, 175, 80)'
              ];

        let score = 0;

        const hideModal = function (el) {
            el.classList.add('hidden');
        };

        const showModal = function (el) {
            el.classList.remove('hidden');
        };

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

            let randNumber = randNum(0, 3);
            if (randNumber === 1) {
                for (let i = 0; i < itemColorValue.length; i++) {
                    const currentTextColor = itemTextColor[i].textContent,
                          currentIndexText = indexText(textList, currentTextColor);

                    itemColorValue[i].style.color = colorList[currentIndexText];
                }
            }
        };

        const nextLevel = function () {
            drawText();
            drawColor();
        };

        const followTheAnswer = function () {
            const scoreEl = document.querySelector('.score');

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
            };

            const pressNot = function () {
                giveAnswerNot();
            };

            const pressKeydownYes = function (e) {
                if (e.keyCode === 37) {
                    giveAnswerYes();
                }
            };

            const pressKeydownNot = function (e) {
                if (e.keyCode === 39) {
                    giveAnswerNot();
                }
            };

            btnAnswerYes.addEventListener('click', pressYes);
            btnAnswerNot.addEventListener('click', pressNot);

            window.addEventListener("keydown", pressKeydownYes);
            window.addEventListener('keydown', pressKeydownNot);
        };

        const followTheTime = function () {
            const timeEl = document.querySelector('.timer'),
                  scoreEl = document.querySelector('.timer');

            const startTimer = function () {

                const endTimer = function () {
                    gameOver();
                    clearInterval(currentInterval);
                };

                let currentTime = myTimer.tick();

                timeEl.textContent = 'Timer: ' + currentTime;
                if (currentTime === 0) {
                    endTimer();
                }
            };

            let currentInterval = setInterval(startTimer, 100);
        };

        const gameOver = function () {
            const modalEnd = document.querySelector('.container__modal__end'),
                  btnReload = document.querySelector('#modal_restart');

            const showResult = function () {
                const elTextScore = document.querySelector('#result__cont_game');
                elTextScore.textContent = 'Ваш результат: ' + score;
            };

            const resetValues = function () {
                score = 0;

                const scoreEl = document.querySelector('.score');
                scoreEl.textContent = 'Score: ' + score;

                myTimer.time = 60;
                followTheTime();
            };

            const reloadGame = function () {

                resetValues();

                hideModal(modalEnd);
                hideModal(modalBg);

                this.removeEventListener('click', reloadGame);
            };

            showResult();
            showModal(modalEnd);
            showModal(modalBg);

            btnReload.addEventListener('click', reloadGame);
        };

        hideModal(modalStart);
        hideModal(modalBg);

        nextLevel();

        followTheAnswer();
        followTheTime();

        this.removeEventListener('click', startGame);
    };

    const btnStartGame = document.querySelector('#modal_start');

    let eventStartGame = btnStartGame.addEventListener('click', startGame);
};
