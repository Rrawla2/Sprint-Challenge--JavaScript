// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height
//   }

class CuboidMaker {
    constructor(length, width, height) { 
        this.length = length;
        this.width = width;
        this.height = height;
    }
    // CuboidMaker.prototype.volume = function() {
    //  return (this.length * this.width * this.height);
    //  }
    volume() {
        return (this.length * this.width * this.height);
    }
    // CuboidMaker.prototype.surfaceArea = function() {
    //  return ((this.length * this.width + this.length * this.height + this.width * this.height) * 2);
    //  }
    surfaceArea() {
        return ((this.length * this.width + this.length * this.height + this.width * this.height) * 2);
    }
}




const cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);
        this.edge = length;
    }

    volume() {
        return Math.pow(this.edge, 3);
    }

    surfaceArea() {
        return ((this.edge * this.edge) * 6); // A = 6a*a
    }
}
const cube = new CubeMaker(4);
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96