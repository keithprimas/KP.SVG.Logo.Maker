// Define a base class called "Shape."
class Shape {
    // Constructor to initialize the "color" property to an empty string.
    constructor() {
      this.color = "";
    }

    // Method to set the color of the shape.
    setColor(colorInput) {
      this.color = colorInput;
    }
}

// Define a class "Triangle" that inherits from the "Shape" class.
class Triangle extends Shape {
    // Method to render a triangle and fill it with the set color.
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a class "Square" that inherits from the "Shape" class.
class Square extends Shape {
    // Method to render a square and fill it with the set color.
    render() {
      return `<rect x="73" y="40" width="200" height="200" fill="${this.color}" />`;
    }
}

// Define a class "Circle" that inherits from the "Shape" class.
class Circle extends Shape {
    // Method to render a circle and fill it with the set color.
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// Export the "Triangle," "Square," and "Circle" classes for use in other modules.
module.exports = { Triangle, Square, Circle };
