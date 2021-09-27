const addSquareButton = document.createElement("button");
addSquareButton.textContent = "Click Here!!!";
document.body.appendChild(addSquareButton);

const squareContainer = document.createElement("div");
squareContainer.id = "square-container";
document.body.appendChild(squareContainer);

let numofSquares = 0;

addSquareButton.addEventListener("click", function () {
    
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    numofSquares++
    newDiv.id = numofSquares

    newDiv.addEventListener("mouseover", function () {
        newDiv.textContent = newDiv.id;
    });
    newDiv.addEventListener("mouseout", function () {
        newDiv.textContent = "";
    });

    newDiv.addEventListener("click", function () {
        newDiv.style.backgroundColor = getRandomColor();
    })
    
    newDiv.addEventListener("dblclick", function () {
        if (newDiv.id % 2 == 0) {
            if (newDiv.nextSibling) {
                newDiv.nextSibling.remove()
            } else {
                alert("No Square!")
            }
        } else {
            if (newDiv.previousSibling) {
                newDiv.previousSibling.remove()
            } else {
                alert("No Square!")
            }
        }
    });
    
    squareContainer.appendChild(newDiv);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
