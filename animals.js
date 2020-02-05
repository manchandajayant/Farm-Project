class Animals {
  constructor(age) {
    this.age = age;
  }
  getValueinEuros() {
    return this.price * this.getWeightInKg();
  }
}

class Pig extends Animals {
  constructor(age) {
    super(age);
    this.price = 4;
  }
  getWeightInKg() {
    return Math.min(700, this.age * 2.3);
  }
}

class Cow extends Animals {
  constructor(age) {
    super(age);

    this.price = 5;
  }
  getWeightInKg() {
    return Math.min(1200, this.age * 1.5);
  }
}

class Horse extends Animals {
  constructor(age) {
    super(age);

    this.price = 10;
  }
  getWeightInKg() {
    return Math.min(1000, this.age * 1.7);
  }
}

module.exports = { Animals, Horse, Cow, Pig };
