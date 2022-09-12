const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const output = document.querySelector("#output");

// Calculating sum of squares
function calculateSumOfSquares(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}

// Calculating hypotenuse
function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "Length of the hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);
