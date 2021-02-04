'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let gameBot = function () {
    function getRandomInt() {
        let min = Math.ceil(1);
        let max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    
      }

    let myNumber =  getRandomInt();

    let game = function (){

        let start = prompt('Я загадал число от 1 до 100. Попробуйте его угадать:');

        switch (start) {

            case (null): 
                alert('Игра окончена');
                break;

            default: 

                if (!isNumber(start)) {
                    alert('Введи число!');
                    game();
                } else if ( +start > myNumber ) {
                    alert('Загаданное число меньше, попробуйте еще раз');
                    game();
                } else if ( +start < myNumber ) {
                    alert('Загаданное число больше, попробуйте еще раз');
                    game();
                } else if ( +start === myNumber ) {
                    alert ('Поздравляю, Вы угадали!!!');
                }
        }
    };

    game();

};

gameBot();
