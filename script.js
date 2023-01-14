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
//    square.addEventListener('mouseleave', e => {
//        e.target.classList.remove('hovered');
//    });
});

// Listen for click on button and prompt for new dimension
const dimensionBtn = document.getElementById('dimension-btn');
dimensionBtn.addEventListener('click', showPrompt);

function showPrompt() {
  const dimension = prompt("Enter the number of rows or columns:");
  updateGrid(dimension);
}

// Update grid based on the new dimension provided by the user
function updateGrid(dimension) {
  
  let hoveredElements = document.querySelectorAll(".hovered");
  hoveredElements.forEach(function(element) {
    element.classList.remove("hovered");
  });
  
  squares.forEach(square => square.remove());
  let totalsquares = dimension * dimension;
  
  for (let i = 0; i < totalsquares; i++) {
    const newSquare = square.cloneNode();
    container.appendChild(newSquare);
    container.childNodes[i].style.height = `calc(100% / ${dimension})`;
    container.childNodes[i].style.width = `calc(100% / ${dimension})`;
    container.childNodes[i].addEventListener("mouseenter", e => {
      e.target.classList.add('hovered');
    });
  };
}