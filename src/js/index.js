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
              colorList = ['#f44336', '#2196F3', '#9C27B0', '#E91E63', '#000', '#FF9800', '#4CAF50'];

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

        const followTheAnswer = function () {
            const giveAnswerYes = function () {
                console.log('answer = yes');
            };

            const giveAnswerNot = function () {
                console.log('answer = not');
            };

            const pressYes = function () {
                giveAnswerYes();
            };

            const pressNot = function () {
                giveAnswerNot();
            };

            const pressKeydownYes = function (e) {
                if (e.keyCode === 37) {
                    console.log('answer = yes');
                }
            };

            const pressKeydownNot = function (e) {
                if (e.keyCode === 39) {
                    console.log('answer = not');
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
