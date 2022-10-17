"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const map = [];
    const hero = {
        health: 100,
        damage: 25,
        swordDamage: 50,
    };

    const gameField = document.querySelector('.field');


    function randomInteger(min, max) {

        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }



    function Enemy(name) {
        this.name = name;
        this.health = 100;
        this.damage = 25;
        this.class = 4;

    }
    let enemies = [];
    for (let i = 0; i < 10; i++) {
        enemies[i] = new Enemy("e" + i);


    }

    function healthBarDraw(i) {

        const enemyHealthBar = document.createElement('div');

        enemyHealthBar.classList.add(`health-bar-${i}`);
        const enemy = document.querySelectorAll('.tileE');
        enemy.forEach(opp => {
            opp.append(enemyHealthBar);

        });


    }
    console.log(enemies);

    function createMap(arr) {
        for (let i = 0; i < 32; i++) {
            arr[i] = new Array(20);
            for (let n = 0; n < 20; n++) {
                arr[i][n] = Math.abs(Math.floor(randomInteger(0, 1)));
            }

        }

        // Генерация прохода по вертикали
        for (let index = 0; index < 6; index++) {
            let j = Math.abs(Math.floor(randomInteger(0, 31)));
            for (let k = 0; k < 20; k++) {
                arr[j][k] = 0;
            }

        }

        // Генерация прохода по горизонтали
        for (let index = 0; index < 3; index++) {
            let j = Math.abs(Math.floor(randomInteger(0, 19)));
            for (let k = 0; k < 32; k++) {
                arr[k][j] = 0;
            }

        }
        // Создаю мечи на карте
        for (let index = 0; index < 2; index++) {
            let j = Math.abs(Math.floor(randomInteger(0, 19)));
            for (let k = 0; k < 2; k++) {
                k = Math.abs(Math.floor(randomInteger(0, 31)));
                arr[k][j] = 2;
            }

        }

        // Создаю зелья на карте
        for (let index = 0; index < 10; index++) {
            let j = Math.abs(Math.floor(randomInteger(0, 19)));
            for (let k = 0; k < 2; k++) {
                k = Math.abs(Math.floor(randomInteger(0, 31)));
                arr[k][j] = 3;
            }

        }

        // Создаю противников на карте
        for (let index = 0; index < 10; index++) {

            let j = Math.abs(Math.floor(randomInteger(0, 19)));
            for (let k = 0; k < 2; k++) {
                k = Math.abs(Math.floor(randomInteger(0, 31)));

                arr[k][j] = enemies[index];

                // for (let i = 0; i < enemies.length; i++) {
                //     console.log(enemies[i]);
                //     arr[k][j] = enemies[i];
                //     continue createNew;
                // }

            }


        }
        console.log(arr);
        // Создаю персонажа на карте
        for (let index = 0; index < 1; index++) {
            let j = Math.abs(Math.floor(randomInteger(0, 19)));
            for (let k = 0; k < 2; k++) {
                k = Math.abs(Math.floor(randomInteger(0, 31)));
                arr[k][j] = 5;
            }

        }

    }



    for (const value of map) {
        console.log(enemies[value].class);
    }


    function fillMap(map) {

        gameField.innerHTML = '';
        for (let arr of map) {
            const gameColumn = document.createElement('div');
            gameColumn.classList.add('tile-top');
            gameField.append(gameColumn);
            for (let value of arr) {

                if (value == 0) {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tile');
                    gameColumn.append(gameRow);
                } else if (value == 1) {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tileW');
                    gameColumn.append(gameRow);
                } else if (value == 2) {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tileSW');
                    gameColumn.append(gameRow);
                } else if (value == 3) {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tileHP');
                    gameColumn.append(gameRow);
                } else if (typeof(value) == 'object') {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tileE');
                    gameColumn.append(gameRow);
                    for (let i = 0; i < enemies.length; i++) {
                        healthBarDraw();

                    }


                    // const healthBars = document.querySelectorAll('.health-bar');
                    // const healthBarsArr = [];
                    // healthBars.forEach(healthBar => {
                    //     healthBarsArr.push(healthBar);
                    // });
                    // console.log(healthBarsArr);
                    // for (const enemy of enemies) {
                    //     if (enemy.name == 'e0' && healthBarsArr[0]) {
                    //         healthBarsArr[0].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e1' && healthBarsArr[1]) {
                    //         healthBarsArr[1].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e2' && healthBarsArr[2]) {
                    //         healthBarsArr[2].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e3' && healthBarsArr[3]) {
                    //         healthBarsArr[3].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e4' && healthBarsArr[4]) {
                    //         healthBarsArr[4].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e5' && healthBarsArr[5]) {
                    //         healthBarsArr[5].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e6' && healthBarsArr[6]) {
                    //         healthBarsArr[6].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e7' && healthBarsArr[7]) {
                    //         healthBarsArr[7].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e8' && healthBarsArr[8]) {
                    //         healthBarsArr[8].style.width = `${enemy.health}%`;
                    //     } else if (enemy.name == 'e9' && healthBarsArr[9]) {
                    //         healthBarsArr[9].style.width = `${enemy.health}%`;
                    //     }
                    // }
                    // if (enemy.health == 0 && gameRow.classList.contains('tileE')) {
                    //     gameRow.classList.remove('tileE');
                    //     gameRow.classList.add('tile');
                    //     //написать отдельную функцию смерти, через перебор массива и замены значения 4 на 0
                    // }


                } else if (value == 5) {
                    const gameRow = document.createElement('div');
                    gameRow.classList.add('tileP');
                    gameColumn.append(gameRow);
                }

            }
            for (let enemy of enemies) {
                switch (enemy.health) {
                    case 100:
                }
            }
        }
    }

    createMap(map);
    fillMap(map);


    const person = document.querySelector('.tileP');
    console.log(person);

    window.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.key == ' ') {
            damage();
            enemyAi();
            fillMap(map);

        }

        if (e.key == "w") {

            for (let arr of map) {

                let indexArr = map.indexOf(arr);

                let indexEl = arr.indexOf(5);

                if (indexEl >= 0) {
                    console.log(indexArr, indexEl);
                    if (map[indexArr][indexEl - 1] == 1 || map[indexArr][indexEl - 1] == 4) {
                        return 0;
                    } else {
                        map[indexArr][indexEl] = 0;
                        indexEl = indexEl - 1;
                        map[indexArr][indexEl] = 5;
                        enemyAi();
                        fillMap(map);
                        return 0;
                    }
                }

            }
        }


        if (e.key == "a") {
            for (let arr of map) {

                let indexArr = map.indexOf(arr);

                let indexEl = arr.indexOf(5);

                if (indexEl >= 0) {
                    console.log(indexArr, indexEl);
                    if (map[indexArr - 1][indexEl] == 1 || map[indexArr - 1][indexEl] == 4) {
                        return 0;
                    } else {
                        map[indexArr][indexEl] = 0;
                        indexArr = indexArr - 1;
                        map[indexArr][indexEl] = 5;
                        enemyAi();
                        fillMap(map);
                        return 0;
                    }
                }

            }

        }
        if (e.key == "s") {
            for (let arr of map) {

                let indexArr = map.indexOf(arr);

                let indexEl = arr.indexOf(5);

                if (indexEl >= 0) {
                    console.log(indexArr, indexEl);
                    if (map[indexArr][indexEl + 1] == 1 || map[indexArr][indexEl + 1] == 4) {
                        return 0;
                    } else {
                        map[indexArr][indexEl] = 0;
                        indexEl = indexEl + 1;
                        map[indexArr][indexEl] = 5;
                        enemyAi();
                        fillMap(map);
                        return 0;
                    }
                }

            }
        }
        if (e.key == "d") {
            // moveRight();
            for (let arr of map) {

                let indexArr = map.indexOf(arr);

                let indexEl = arr.indexOf(5);

                if (indexEl >= 0) {
                    console.log(indexArr, indexEl);
                    if (map[indexArr + 1][indexEl] == 1 || map[indexArr + 1][indexEl] == 4) {
                        return 0;
                    } else {
                        map[indexArr][indexEl] = 0;
                        indexArr = indexArr + 1;
                        map[indexArr][indexEl] = 5;
                        enemyAi();
                        fillMap(map);
                        return 0;
                    }

                }

            }
        }
    });



    function damage() {
        for (let arr of map) {

            let indexArr = map.indexOf(arr);

            let indexEl = arr.indexOf(5);

            if (indexEl >= 0) {
                console.log(indexArr, indexEl);
                let enemyCheckUp = arr[indexEl - 1];
                let enemyCheckDown = map[indexArr][indexEl + 1];
                let enemyCheckLeft = map[indexArr - 1][indexEl];
                let enemyCheckRight = map[indexArr + 1][indexEl];
                console.log(enemyCheckUp);
                console.log(enemyCheckDown);
                console.log(enemyCheckLeft);
                console.log(enemyCheckRight);
                console.log(map);
                console.log(enemies);

                if (typeof(enemyCheckUp) == 'object') {
                    enemyCheckUp.health = enemyCheckUp.health - hero.damage;
                    enemyCheckUp.healthBarDraw(enemyCheckUp.health);
                } else if (typeof(enemyCheckDown) == 'object') {
                    enemyCheckDown.health = enemyCheckDown.health - hero.damage;
                } else if (typeof(enemyCheckLeft) == 'object') {
                    enemyCheckLeft.health = enemyCheckLeft.health - hero.damage;
                } else if (typeof(enemyCheckRight) == 'object') {
                    enemyCheckRight.health = enemyCheckRight.health - hero.damage;
                }

            }

        }
    }

    function enemyAi() {
        for (let arr of map) {

            let indexArr = map.indexOf(arr);

            let indexEl = arr.indexOf(4);

            if (indexEl >= 0) {
                console.log(indexArr, indexEl);
                // if (map[indexArr + 1][indexEl] == 1 || map[indexArr + 1][indexEl] == 4) {
                //     return 0;
                // } else {
                const randStep = Math.abs(Math.floor(randomInteger(0, 3)));
                console.log(randStep);
                switch (randStep) {
                    case 0:
                        map[indexArr][indexEl] = 0;
                        indexEl = indexEl - 1;
                        map[indexArr][indexEl] = 4;
                        fillMap(map);
                        return 0;
                    case 1:
                        map[indexArr][indexEl] = 0;
                        indexArr = indexArr - 1;
                        map[indexArr][indexEl] = 4;
                        fillMap(map);
                        return 0;
                    case 2:
                        map[indexArr][indexEl] = 0;
                        indexEl = indexEl + 1;
                        map[indexArr][indexEl] = 4;
                        fillMap(map);
                        return 0;
                    case 3:
                        map[indexArr][indexEl] = 0;
                        indexArr = indexArr + 1;
                        map[indexArr][indexEl] = 4;
                        fillMap(map);
                        return 0;
                }
                // }

            }

        }
    }
});