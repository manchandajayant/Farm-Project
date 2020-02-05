const { Farm } = require("./index");
const { Pig, Cow, Horse } = require("./animals");
const { Wheat, Sugarcane } = require("./crop");

test("The income of a the whole farm with.....", () => {
  const farm = new Farm("TEST_NAME");
  farm.addAnimal(new Pig(40));
  farm.addAnimal(new Cow(40));
  farm.addAnimal(new Horse(10));
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  expect(farm.calculateIncome()).toBeCloseTo(2756.37, 1);
});
