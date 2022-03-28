const noConstructibleChange = require("./noConstructibleChange");

it("[5, 7, 1, 1, 2, 3, 22]", () => {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const result = noConstructibleChange(coins);
  expect(result).toBe(20);
});

it("[1, 1, 1, 1, 1]", () => {
  const coins = [1, 1, 1, 1, 1];
  const result = noConstructibleChange(coins);
  expect(result).toBe(6);
});

it("[1, 5, 1, 1, 1, 10, 15, 20, 100]", () => {
  const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
  const result = noConstructibleChange(coins);
  expect(result).toBe(55);
});
