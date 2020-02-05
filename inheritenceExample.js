class Dad {
  constructor(name) {
    this.name = name;
  }
  carpentry() {
    console.log("Woodworking", this.name);
  }
}

class Child extends Dad {
  constructor(name) {
    super("HELLO");
    this.name = name;
  }
}

const john = new Dad("John");
const peter = new Child("peter");

console.log("John", john);
console.log("peter", peter);
john.carpentry();
peter.carpentry();
