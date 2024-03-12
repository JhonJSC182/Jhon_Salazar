let circle = document.getElementById("circle")
let up = document.getElementById("up")
let down = document.getElementById("down")

let rotateValue = circle.style.transform; //CSS property 

let rotateSum;

up.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)"; 
    circle.style.transform = rotateSum; // Creates a rotation of -90 degrees to the circle
    rotateValue = rotateSum;
}

down.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum; // Creates a rotation of 90 degrees to the circle
    rotateValue = rotateSum;
}