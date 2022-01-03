let functions = require("./sum");

test("makes sure sum returns the proper values", () => {
  expect(functions.sum()).toBe(0);
  expect(functions.sum(1)).toBe(1);
  expect(functions.sum(1, 2)).toBe(3);
  expect(functions.sum(1, 2, 4)).toBe(7);
});

test("check if user input params sum properly", () => {
  expect(functions.sum2(1, 2, 4)).toBe(7);
  expect(functions.sum2(1, 2, 3, 4, 5, 6)).toBe(21);
});
