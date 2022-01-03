module.exports = {};

//? TASK 1
module.exports.sum = sum = (a = 0, b = 0, c = 0) => a + b + c;

//? TASK 2
module.exports.sum2 = (...nums) => nums.reduce((acc, val) => acc + val, 0);
