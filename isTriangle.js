const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const output = document.querySelector("#output");

// Calculating the sum of angles
function calculateSumOfAngles(a1, a2, a3) {
  const sumOfAngles = a1 + a2 + a3;
  return sumOfAngles;
}

// Checking if triangles form a triangle
function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Angles form a triangle!";
  } else {
    output.innerText = "Ah! Angles do not from a triangle.";
  }
}

isTriangleButton.addEventListener("click", isTriangle);
