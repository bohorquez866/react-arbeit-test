// module.exports = {};

//? TASK 1
module.exports.sum = sum = (a = 0, b = 0, c = 0) => a + b + c;

//? TASK 2
module.exports.sum2 = (...nums) => nums.reduce((acc, val) => acc + val, 0);

//? TASK 3

module.exports.obj = obj = {
  ap: 1,
  b: "value",
  c: 404,
  watch: { ap: "value", see: { ap: 1, b: 2 } },
};

module.exports.getPaths = getPaths = (object, key) => {
  let mymap = new Map(),
    x = Object.entries(object).reduce(
      (r, [k, v]) => {
        if (!v || typeof v !== "object") return r;
        r.push(...getPaths(v, key).map(([l, v]) => [k + (l && "/") + l, v]));
        return r;
      },
      key in object ? [["", object[key]]] : []
    );

  mymap.set(key, x);

  return x;
};
