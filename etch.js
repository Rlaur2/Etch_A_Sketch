const container = document.querySelector('.container');
const resetButton = document.querySelector('.button');
const drawButton = document.querySelector('#draw');
const rainbowButton = document.querySelector('#rainbow');
const eraseButton = document.querySelector('.erase');

//function to activate draw capability and remove erase capability
//can be toggled
const draw = () => {
    if (drawButton.className === 'smButton draw-clicked') {
        drawButton.classList.remove('draw-clicked');
        for (square of squares) {
            square.removeEventListener('mouseover',hoverAdd);
        }
    } else {
    drawButton.classList.add('draw-clicked');
    eraseButton.style.cssText = '';
    rainbowButton.classList.remove('rainbow-clicked');
    rainbowButton.style.cssText = '';
    for (square of squares) {
        square.addEventListener('mouseover',hoverAdd);
        square.removeEventListener('mouseover',hoverDelete);
        square.removeEventListener('mouseover',hoverRainbow);
        }
    }  
};

/*The draw function needs to be adjusted slightly for the reset
functionality, or else the draw function would act as a toggle
which doesn't make sense for the reset */
const drawGrid = () => {
    drawButton.classList.add('draw-clicked');
    eraseButton.style.cssText = '';
    rainbowButton.classList.remove('rainbow-clicked');
    rainbowButton.style.cssText = '';
    for (square of squares) {
        square.addEventListener('mouseover',hoverAdd);
        square.removeEventListener('mouseover',hoverDelete);
        square.removeEventListener('mouseover',hoverRainbow);
        }
};

//loop to create grid based off the number given, default is 16x16
//also turns on the Draw function
const gridCreation = (grid = 16) => {
for (i = 0; i < grid * grid; i++) {
    square = document.createElement('div');
    square.classList.toggle('square');
    squareWidth = container.offsetWidth / grid;
    squareHeight = container.offsetHeight / grid;
    square.style.cssText = `height: ${squareHeight}px; width: ${squareWidth}px;`;
    container.appendChild(square);
}
squares = document.querySelectorAll('.square');
drawGrid();
}

//creates initial default grid
gridCreation();

//function to add color of squares when moused over
function hoverAdd (e) {
    this.classList.add('hovered');
    this.style.backgroundColor = '';
}

//function to delete color of squares when moused over
function hoverDelete (e) {
    this.classList.remove('hovered');
    this.style.backgroundColor = '';
}

//function to add a random RGB value when moused over
function hoverRainbow (e) {
    random = Math.floor(Math.random()*255);
    random1 = Math.floor(Math.random()*255);
    random2 = Math.floor(Math.random()*255);
    this.style.backgroundColor = `rgb(${random},${random1},${random2})`;
}

//function for reset grid button, had to look up the 'isNaN' method, newGrid !== 'number' doesn't work
const resetGrid = () => {
    newGrid = Number((prompt('How many squares per side would you like? Choose a number between (and including) 1 and 100.')));
    if (newGrid > 50) {
        alert('Warning! Choosing a number greater than 50 may cause slowdown!');
    }
    if (newGrid > 100 || newGrid < 1 || isNaN(newGrid)) {
        alert('Please enter a number between (and including) 1 and 100!');
        return;
    }
    for (square of squares) {
        container.removeChild(square);
    }
    gridCreation(newGrid);
}

/*function that creates a rainbow effect, added 'once' keyword so ot doesn't overwrite
square when hovered */
const rainbow = () => {
    if (rainbowButton.className === 'smButton rainbow-clicked') {
        rainbowButton.classList.remove('rainbow-clicked');
        rainbowButton.style.cssText = '';
        for (square of squares) {
            square.removeEventListener('mouseover',hoverRainbow);
        }
    } else {
        rainbowButton.classList.add('rainbow-clicked');
        rainbowButton.style.cssText = 'background-size: 1800% 1800%';
        drawButton.classList.remove('draw-clicked');
        eraseButton.style.cssText = '';
        for (square of squares) {
            square.addEventListener('mouseover',hoverRainbow,{once:true});
            square.removeEventListener('mouseover',hoverAdd);
            square.removeEventListener('mouseover',hoverDelete);
        }
    }
};

//counter function that erases and removes draw ability, can be toggled
const erase = () => {
    if (eraseButton.style.cssText === 'background-color: red; color: black; outline: black solid 2px;') {
        eraseButton.style.cssText = '';
        for (square of squares) {
            square.removeEventListener('mouseover',hoverDelete);
        }
    } else {
    eraseButton.style.cssText = 'background-color: red; color: black; outline: 2px black solid;';
    drawButton.classList.remove('draw-clicked');
    rainbowButton.classList.remove('rainbow-clicked');
    rainbowButton.style.cssText = '';
    for (square of squares) {
        square.addEventListener('mouseover',hoverDelete);
        square.removeEventListener('mouseover',hoverAdd);        
      }
    }
};

//Event listeners for the four buttons
resetButton.addEventListener('click',resetGrid);
drawButton.addEventListener('click',draw);
eraseButton.addEventListener('click',erase);
rainbowButton.addEventListener('click',rainbow)
