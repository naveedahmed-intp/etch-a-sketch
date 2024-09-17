let container = document.querySelector("#container");
let button = document.querySelector("#btn");

let divs = [];

function bg_Color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor;
}

let body = document.querySelector("body");
let newRandomColor = Math.floor(Math.random()*16777215).toString(16);

window.addEventListener('load', () => {
    let GridSize = 16;
    if (GridSize > 0 && GridSize <= 100) {
        for(let i = 1; i <= Math.pow(GridSize, 2); i++) {
            let div = document.createElement("div");
            div.style.padding = (960/(2*GridSize)) + "px";
            div.classList.add("box");
            div.style.backgroundColor = bg_Color();
            div.style.justifyContent = "space-between";
            container.appendChild(div);
        }
    }
})



