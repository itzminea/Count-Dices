// Number of dices

const number = document.getElementById('number');
const max = document.getElementById('max');
const min = document.getElementById('min');
let count = 0;

max.addEventListener("click",() => {
    count++;
    check();
})

function update() {
    number.innerHTML = count;
}

min.addEventListener("click",() => {
    count--;
    check();
})

function check() {
    if (0 >= count) {
        count++;
        update();
    } else if (7 <= count) {
        count--;
        update();
    } else {
        update();
    }
}

// Dices
const dices = document.getElementById('dices');
const roll = document.getElementById("roll");

roll.addEventListener("click", () => {
    dices.innerHTML = ' ';
    rollTheDices();
});

function rollTheDices() {
    for (var i = 1; i <= count; i++) {
        let randomNumber = (Math.floor(Math.random() * 6) + 1);

        switch (randomNumber) {
            case 1: 
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-one.svg" draggable="false">';
                break;
            case 2:
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-two.svg" draggable="false">';
                break;
            case 3:
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-three.svg" draggable="false">';
                break;
            case 4:
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-four.svg" draggable="false">';
                break;
            case 5:
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-five.svg" draggable="false">';
                break;
            case 6:
                dices.innerHTML += '<img src="assets\\diceFaces\\dice-six-faces-six.svg" draggable="false">'; 
                break;
            default:
                rollTheDices();
        }
    }   
}
