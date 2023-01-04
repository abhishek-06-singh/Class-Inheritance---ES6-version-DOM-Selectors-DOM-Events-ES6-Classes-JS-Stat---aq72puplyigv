import Circle from "./circle";

const myCircle = new Circle("red", 10);
myCircle.drawShape(); // Output: "Drawing a shape"
myCircle.calculateArea(); // Output: "The area of the circle is 314.16"
const Shape = require("./shape");

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    const area = Math.PI * this.radius * this.radius;
    console.log(`The area of the circle is ${area}`);
  }
}

module.exports = Circle;
