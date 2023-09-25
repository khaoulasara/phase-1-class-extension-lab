// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) return false;
      const [side1, side2, side3] = this.sides;
      return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) return false;
      const [side1, side2, side3, side4] = this.sides;
      return side1 === side2 && side1 === side3 && side1 === side4;
    }
  
    get area() {
      if (this.isValid) {
        const [side1] = this.sides;
        return side1 ** 2;
      }
    }
  }
  
  // Example usage
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides); // Output: 3
  console.log(triangle.perimeter); // Output: 12
  console.log(triangle.isValid); // Output: true
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.countSides); // Output: 4
  console.log(square.perimeter); // Output: 16
  console.log(square.isValid); // Output: true
  console.log(square.area); // Output: 16
  