// Listen for click on button and prompt for new dimension
const dimensionBtn = document.getElementById('dimension-btn');
dimensionBtn.addEventListener('click', showPrompt);

function showPrompt() {
  let dimension = prompt("Enter the number of rows or columns:", "16");
  let colorOption = "";
  while(!colorOption) {
    colorOption = prompt(`Choose one of the following options:
    red
    random
    shading`, "random");
  }
  prepGrid(dimension, colorOption);
}

function showPrompt() {
  let dimension = prompt("Enter the number of rows or columns:", "16");
  dimension = parseInt(dimension);
  if (!isNaN(dimension) && dimension <= 100) {
    // Prepare grid with the provided dimension
    let colorOption = "";
    while(!colorOption) {
      colorOption = prompt(`Choose one of the following options:
      red
      random
      shading`, "random");
  }
  prepGrid(dimension, colorOption);
  } else {
    // Show an error message
    alert("Invalid input. Please enter a number less than or equal to 100.");
  }
}

// Update grid based on the new dimension provided by the user
function prepGrid(dimension, colorOption) {
  
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
    let counter = 0;
    container.childNodes[i].addEventListener("mouseenter", e => {
      if (colorOption === "red") {
        e.target.style.backgroundColor = "red";
      } else if (colorOption === "random") {
        const randomColor = getRandomColor();
        e.target.style.backgroundColor = randomColor;
      } else if (colorOption === "shading") {
        e.target.style.backgroundColor = "black";
        counter++;
        if (counter <=10) {
          e.target.style.opacity = 0 + (counter * 0.1);
        }
      }
  });
  };
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}