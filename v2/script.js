const number = document.getElementById('number'); 
const max = document.getElementById('max'); 
const min = document.getElementById('min'); 
const dices = document.getElementById('dices'); 
const roll = document.getElementById("roll");
const theme = document.getElementById('theme');
const color = document.body;
let count = 0;  

max.addEventListener("click",() => {    
    count++;
    check();
});

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

roll.addEventListener("click", () => {
    dices.innerHTML = ' ';
    rollTheDices();
});

function rollTheDices() {
    for (var i = 1; i <= count; i++) {
        let randomNumber = (Math.floor(Math.random() * 6) + 1);

        switch (randomNumber) {
            case 1: 
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\one.svg" draggable="false">`;
                break;
            case 2:
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\two.svg" draggable="false">`;
                break;
            case 3:
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\three.svg" draggable="false">`;
                break;
            case 4:
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\four.svg" draggable="false">`;
                break;
            case 5:
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\five.svg" draggable="false">`;
                break;
            case 6:
                dices.innerHTML += `<img src="assets\\diceFaces\\newDiceFaces\\six.svg" draggable="false">`; 
                break;
            default:
                rollTheDices();
        }
    }   
}

theme.addEventListener("click", () => {
    let themeChanger = Math.floor(Math.random() * 12);
    console.log(themeChanger)
    
    switch (themeChanger) {
        case 0:
            color.style.setProperty('--color1', '#0f0f0f');
            color.style.setProperty('--color2', '#e09f3e');
            color.style.setProperty('--color3', '#473198');
            color.style.setProperty('--color4', '#33673b');
            color.style.setProperty('--color5', '#932a2b');
            break;
        case 1:
            color.style.setProperty('--color1', '#292f36');
            color.style.setProperty('--color2', '#ffca3a');
            color.style.setProperty('--color3', '#16db65');
            color.style.setProperty('--color4', '#ff6b6b');
            color.style.setProperty('--color5', '#ffffff');
            break;
        case 2:
            color.style.setProperty('--color1', '#ffffff');
            color.style.setProperty('--color2', '#7f7f7f');
            color.style.setProperty('--color3', '#861657');
            color.style.setProperty('--color4', '#ff934f');
            color.style.setProperty('--color5', '#0a100d');
            break;
        case 3:
            color.style.setProperty('--color1', '#dbf9b8');
            color.style.setProperty('--color2', '#e09f3e');
            color.style.setProperty('--color3', '#473198');
            color.style.setProperty('--color4', '#33673b');
            color.style.setProperty('--color5', '#932a2b');
            break;
        case 4:
            color.style.setProperty('--color1', '#fffffa');
            color.style.setProperty('--color2', '#515052');
            color.style.setProperty('--color3', '#000103');
            color.style.setProperty('--color4', '#333138');
            color.style.setProperty('--color5', '#ff312e');
            break;
        case 5:
            color.style.setProperty('--color1', '#fde8e9');
            color.style.setProperty('--color2', '#21a0a0');
            color.style.setProperty('--color3', '#d81159');
            color.style.setProperty('--color4', '#3F612D');
            color.style.setProperty('--color5', '#424b54');
            break;
        case 6:
            color.style.setProperty('--color1', '#8789c0');
            color.style.setProperty('--color2', '#45f0df');
            color.style.setProperty('--color3', '#c2cae8');
            color.style.setProperty('--color4', '#8380b6');
            color.style.setProperty('--color5', '#111d4a');
            break;
        case 7:
            color.style.setProperty('--color1', '#d4e09b');
            color.style.setProperty('--color2', '#9cb380');
            color.style.setProperty('--color3', '#94a89a');
            color.style.setProperty('--color4', '#c7ac92');
            color.style.setProperty('--color5', '#a44a3f');
            break;
        case 8:
            color.style.setProperty('--color1', '#b5f44a');
            color.style.setProperty('--color2', '#585123');
            color.style.setProperty('--color3', '#eb6534');
            color.style.setProperty('--color4', '#40476d');
            color.style.setProperty('--color5', '#6494aa');
            break;
        case 9:
            color.style.setProperty('--color1', '#242038');
            color.style.setProperty('--color2', '#9067c6');
            color.style.setProperty('--color3', '#8d86c9');
            color.style.setProperty('--color4', '#cac4ce');
            color.style.setProperty('--color5', '#f7ece1');
            break;
        case 10:
            color.style.setProperty('--color1', '#545f66');
            color.style.setProperty('--color2', '#829399');
            color.style.setProperty('--color3', '#d0f4ea');
            color.style.setProperty('--color4', '#e8fcc2');
            color.style.setProperty('--color5', '#b1cc74');
            break;
        case 12:
            color.style.setProperty('--color1', '#e6e1c5');
            color.style.setProperty('--color2', '#d4cb92');
            color.style.setProperty('--color3', '#f8333c');
            color.style.setProperty('--color4', '#80a4ed');
            color.style.setProperty('--color5', '#395c6b');
            break;
        default:
            break;
    }
});