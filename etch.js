const container = document.querySelector('.container');
const resetButton = document.querySelector('.button');
const drawButton = document.querySelector('#draw');
const eraseButton = document.querySelector('.erase');

//loop to create inital amount of 16x16 squares
const gridCreation = (grid = 16) => {
for (i = 0; i < grid * grid; i++) {
    square = document.createElement('div');
    square.classList.toggle('square');
    squareSize = 900 / grid;
    square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px;`;
    container.appendChild(square);
    //find out out to use the forEach method, I only know how to work a 'for of' loop
}
squares = document.querySelectorAll('.square');
}

gridCreation();

//function to add color of squares when moused over
function hoverAdd (e) {
    this.classList.add('hovered');
}

//function to delete color of squares when moused over
function hoverDelete (e) {
    this.classList.remove('hovered');
}

//function for reset grid button, had to look up the 'isNaN' method
const resetGrid = () => {
    newGrid = Number((prompt('How many squares per side would you like? Choose a number between (and including) 1 and 100.')));
    if (newGrid > 100 || newGrid < 1 || isNaN(newGrid)) {
        alert('Please enter a number between (and including) 1 and 100!');
        return;
    }
    for (square of squares) {
        container.removeChild(square);
    }
    drawButton.classList.remove('draw-clicked');
    eraseButton.style.cssText = '';
    gridCreation(newGrid);
}

resetButton.addEventListener('click',resetGrid);

//function to activate draw capability and remove erase capability
const draw = () => {
    drawButton.classList.add('draw-clicked');
    eraseButton.style.cssText = '';
    for (square of squares) {
        square.addEventListener('mouseover',hoverAdd);
        square.removeEventListener('mouseover',hoverDelete);
    }
};
drawButton.addEventListener('click',draw);

//counter function that erases and removes draw ability
const erase = () => {
    eraseButton.style.cssText = 'background-color: red; color: black; outline: 2px black solid;'
    drawButton.classList.remove('draw-clicked');
    for (square of squares) {
        square.addEventListener('mouseover',hoverDelete);
        square.removeEventListener('mouseover',hoverAdd);        
    }
};
eraseButton.addEventListener('click',erase);
