const container = document.querySelector('.container');

for (i = 0; i < 255; i++) {
    square = document.createElement('div');
    square.classList.toggle('square');
    container.appendChild(square);
}