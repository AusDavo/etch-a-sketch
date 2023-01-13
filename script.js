// Select the container element
const container = document.querySelector('.grid-container');

// Create a template for a single square div
const square = document.createElement('div');
square.classList.add('grid-square');

// Use a loop to create and append 256 square divs to the container
for (let i = 0; i < 256; i++) {
    const newSquare = square.cloneNode();
    container.appendChild(newSquare);
}

//Add a class to the square element, when the mouse enters and remove the class when the mouse leaves
const squares = document.querySelectorAll('.grid-square');

squares.forEach(square => {
    square.addEventListener('mouseenter', e => {
        e.target.classList.add('hovered');
    });
    square.addEventListener('mouseleave', e => {
        e.target.classList.remove('hovered');
    });
});