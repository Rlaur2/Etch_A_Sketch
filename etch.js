const container = document.querySelector('.container');
const resetButton = document.querySelector('.button');
const drawButton = document.querySelector('#draw');
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
    for (square of squares) {
        square.addEventListener('mouseover',hoverAdd);
        square.removeEventListener('mouseover',hoverDelete);
        }
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
draw();
}

//creates initial default grid
gridCreation();

//function to add color of squares when moused over
function hoverAdd (e) {
    this.classList.add('hovered');
}

//function to delete color of squares when moused over
function hoverDelete (e) {
    this.classList.remove('hovered');
}

//function for reset grid button, had to look up the 'isNaN' method, newGrid !== 'number' doesn't work
const resetGrid = () => {
    newGrid = Number((prompt('How many squares per side would you like? Choose a number between (and including) 1 and 100.')));
    if (newGrid > 100 || newGrid < 1 || isNaN(newGrid)) {
        alert('Please enter a number between (and including) 1 and 100!');
        return;
    }
    for (square of squares) {
        container.removeChild(square);
    }
    gridCreation(newGrid);
}

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
    for (square of squares) {
        square.addEventListener('mouseover',hoverDelete);
        square.removeEventListener('mouseover',hoverAdd);        
      }
    }
};

//Event listeners for the three buttons
resetButton.addEventListener('click',resetGrid);
drawButton.addEventListener('click',draw);
eraseButton.addEventListener('click',erase);
