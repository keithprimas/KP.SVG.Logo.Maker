// Import the Shape classes (Triangle, Square, and Circle) from the "Shape.js" module.
const { Triangle, Square, Circle } = require('./Shape.js');

// Describe the tests for the Triangle class.
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    // Create a new instance of the Triangle class.
    const shape = new Triangle();

    // Set the color of the triangle to "blue".
    shape.setColor("blue");

    // Check if the rendered SVG representation of the triangle matches the expected result.
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Describe the tests for the Square class.
describe("Square test", () => {
  test("test for a square with a red background", () => {
    // Create a new instance of the Square class.
    const shape = new Square();

    // Set the color of the square to "red".
    shape.setColor("red");

    // Check if the rendered SVG representation of the square matches the expected result.
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="200" height="200" fill="red" />'
    );
  });
});

// Describe the tests for the Circle class.
describe("Circle test", () => {
  test("test for a circle with a green background", () => {
    // Create a new instance of the Circle class.
    const shape = new Circle();

    // Set the color of the circle to "green".
    shape.setColor("green");

    // Check if the rendered SVG representation of the circle matches the expected result.
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="green" />'
    );
  });
});
