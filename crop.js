class Crop {
  constructor(acres) {
    //console.log("this crop", this.acres);
    this.acres = acres;
  }
  getYieldInEuros() {
    return this.calculateYield() * this.price;
  }

  getCosts() {
    return this.costs * this.acres;
  }
}

class Wheat extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 1.5;
    this.costs = 340;
  }

  calculateYield() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

class Sugarcane extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 2;
    this.costs = 166;
  }

  calculateYield() {
    //console.log("this acres", this.acres);
    return Math.pow(this.acres * 2.6, 1.1);
  }
}

// module.exports = { Wheat };
module.exports = { Sugarcane, Crop, Wheat };
