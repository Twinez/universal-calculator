export function calculateSquareArea(side) {
  return side ** 2;
}

export function calculateSquarePerimeter(side) {
  return side * 4;
}

export function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

export function calculateTrianglePerimeter(base, height) {
  return Math.sqrt(base ** 2 + height ** 2);
}

export function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

export function calculateCirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}
