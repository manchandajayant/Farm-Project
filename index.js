// const { Wheat, Sugarcane } = require("./crop");
// const { Cow, Horse, Pig } = require("./animals");

class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }
  addCrop(crop) {
    this.crops.push(crop);
  }

  calculateIncomeForCrops() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);
  }
  addAnimal(animal) {
    this.animals.push(animal);
  }

  calculateIncomeForAnimals() {
    return this.animals
      .map(animal => animal.getValueinEuros())
      .reduce((a, b) => a + b, 0);
  }

  calculateIncome() {
    return this.calculateIncomeForAnimals() + this.calculateIncomeForCrops();
  }
}

// console.log(`
// ----------------------
// - Farm: FARM NAME    - Drake's Farm
// - No. of crops: XX   - ${calculateIncomeForCrops}
// - No. of animals: YY - ${calculateIncomeForAnimals}
// - Total income: ZZZ€ - ${calculateIncome}
// ----------------------`);
module.exports.Farm = Farm;
