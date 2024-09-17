let container = document.querySelector("#container");
let button = document.querySelector("#btn");

function bg_Color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor;
}

window.addEventListener('load', () => {
    let defaultGridSize = 16;
    makeGrid(defaultGridSize);
});

button.addEventListener('click', () => {
    while(true) {
        let gridSize = prompt("Enter Grid Size (1-100)");
        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) 
            {
                clearGrid();
                makeGrid(gridSize);
                break;
        }
    }
})

let boxes = document.querySelectorAll(".box");

container.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains("box")) {
        e.target.style.backgroundColor = bg_Color();
    }
})

function makeGrid(size) {
    if (size > 0 && size <= 100) {
        for(let i = 1; i <= Math.pow(size, 2); i++) {
            let div = document.createElement("div");
            div.className = "box";
            div.style.padding = (960/(2*size)) + "px";
            //div.style.backgroundColor = bg_Color();
            div.style.justifyContent = "space-between";
            container.appendChild(div);
        }
    }
}


function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}



