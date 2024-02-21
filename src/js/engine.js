const state  = {
    view: {
        squeres: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        timerId: null,
        stateSpeed: 850,
    },
}

function randomSquare(){
    state.view.squeres.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squeres[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.stateSpeed);
}

function addListnerHitBox(){
    state.view.squeres.forEach((square) => {

    });
}

function init(){
    moveEnemy();
}

init();