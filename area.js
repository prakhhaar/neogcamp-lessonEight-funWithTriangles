const sides = document.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-button");
const output = document.querySelector("#output");

// Formula for area of triangle
function calculateAreaOfTriangle(b, h){
    const areaOfTriangle = 1/2*(b*h);
    return areaOfTriangle;
}

// Taking inputs and calulating area of triangle
function calculateArea(){
    const areaOfTriangle = calculateAreaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    output.innerText = "The area of triangle is " + areaOfTriangle + " units.";
}

areaButton.addEventListener("click", calculateArea);