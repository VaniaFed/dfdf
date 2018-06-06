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
            for (let i = 0; i < colorList.length; i++) {
                let currentColor = randNum(0, colorList.length - 1);
                colorItem[i].style.color = colorList[currentColor];
            }
        };

        hiddenModal(modalStart);
        hiddenModal(modalBg);

        drawText();
        drawColor();

        this.removeEventListener('click', startGame);
    };

    const followTheAnswer = function () {
        const giveAnAnswer = function () {

        };

    };

    const followTheTime = function () {

    };

    const gameOver = function () {

    };

    const btnStartGame = document.querySelector('#modal_start');

    let eventStartGame = btnStartGame.addEventListener('click', startGame);
};
