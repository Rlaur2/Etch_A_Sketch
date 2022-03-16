const container = document.querySelector('.container');
const resetButton = document.querySelector('.button');

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
for (square of squares) {
    square.addEventListener('mouseover',hover);
}}

gridCreation();

//function to change color of squares when moused over
function hover (e) {
    this.classList.add('hovered');
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
    gridCreation(newGrid);
}

resetButton.addEventListener('click',resetGrid);