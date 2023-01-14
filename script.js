// Listen for click on button and prompt for new dimension
const dimensionBtn = document.getElementById('dimension-btn');
dimensionBtn.addEventListener('click', showPrompt);

function showPrompt() {
  let dimension = prompt("Enter the number of rows or columns:", "16");
  prepGrid(dimension);
}

// Update grid based on the new dimension provided by the user
function prepGrid(dimension) {
  
  // Select the container element
  const container = document.querySelector('.grid-container');
  container.style.display = "flex";
  container.style.display = "wrap";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < dimension * dimension; i++) { 
    const square = document.createElement("div");
    container.appendChild(square);
    container.childNodes[i].style.height = `calc(100% / ${dimension})`;
    container.childNodes[i].style.width = `calc(100% / ${dimension})`;
    container.childNodes[i].classList.add("grid-square");
    container.childNodes[i].addEventListener("mouseenter", e => {
    e.target.classList.add('hovered');
    });
  };
}