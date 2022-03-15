const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    square = document.createElement('div');
    square.classList.toggle('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

function hover (e) {
    this.classList.add('hovered');
}

for (square of squares) {
    square.addEventListener('mouseover',hover);
}

