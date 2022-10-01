import {
  summation,
  subtraction,
  multiplication,
  division,
} from "./calculation/calculate.js";

import {
  calculateSquareArea,
  calculateSquarePerimeter,
  calculateTriangleArea,
  calculateTrianglePerimeter,
  calculateCircleArea,
  calculateCirclePerimeter,
} from "./calculation/shape.js";

const squareFormElement = document.getElementById("square-form");
const squareSideElement = document.getElementById("side-square");
const squareButtonElement = document.getElementById("square");
const squareWrapperElement = document.querySelector(".square-wrapper");
const squareResultAreaElement = document.getElementById("square-area");
const squareResultPerimeterElement =
  document.getElementById("square-perimeter");

const triangleWrapperElement = document.querySelector(".triangle-wrapper");
const triangleFormElement = document.getElementById("triangle-form");
const triangleBaseElement = document.getElementById("triangle-base");
const triangleHeightElement = document.getElementById("triangle-height");
const triangleButtonElement = document.getElementById("triangle");
const triangleAreaElement = document.getElementById("triangle-area");
const trianglePerimeterElement = document.getElementById("triangle-perimeter");

const circleWrapperElement = document.querySelector(".circle-wrapper");
const circleFormElement = document.getElementById("circle-form");
const circleRadiusElement = document.getElementById("circle-radius");
const circleAreaElement = document.getElementById("circle-area");
const circlePerimeterElement = document.getElementById("circle-perimeter");
const circleButtonElement = document.getElementById("circle");

window.addEventListener("load", () => {
  triangleWrapperElement.style.display = "";
  squareWrapperElement.style.display = "none";
  circleWrapperElement.style.display = "none";
});

squareButtonElement.onclick = () => {
  console.log("work");
  squareWrapperElement.style.display = "";
  triangleWrapperElement.style.display = "none";
  circleWrapperElement.style.display = "none";
};

squareFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultArea = calculateSquareArea(squareSideElement.value);
  squareResultAreaElement.innerText = ` Square Area: ${resultArea}`;

  const resultPerimeter = calculateSquarePerimeter(squareSideElement.value);
  squareResultPerimeterElement.innerText = `Square Perimeter: ${resultPerimeter}`;
});

triangleButtonElement.onclick = () => {
  console.log("work");
  triangleWrapperElement.style.display = "";
  squareWrapperElement.style.display = "none";
  circleWrapperElement.style.display = "none";
};

triangleFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultArea = calculateTriangleArea(
    triangleBaseElement.value,
    triangleHeightElement.value
  ).toFixed(2);

  triangleAreaElement.innerText = `Triangle Area: ${resultArea}`;
  const resultPerimeter = calculateTrianglePerimeter(
    triangleBaseElement.value,
    triangleHeightElement.value
  ).toFixed(2);

  trianglePerimeterElement.innerText = `Triangle Perimeter ${resultPerimeter}`;
});

circleButtonElement.onclick = () => {
  console.log("work");
  circleWrapperElement.style.display = "";
  squareWrapperElement.style.display = "none";
  triangleWrapperElement.style.display = "none";
};

circleFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultArea = calculateCircleArea(circleRadiusElement.value).toFixed(2);

  circleAreaElement.innerText = `Circle Area: ${resultArea}`;
  const resultPerimeter = calculateCirclePerimeter(
    circleRadiusElement.value
  ).toFixed(2);

  circlePerimeterElement.innerText = `Circle Perimeter ${resultPerimeter}`;
});
