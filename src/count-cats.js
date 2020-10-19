const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = matrix.flat();
  let n = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "^^") {
      n += 1;
    }
  }
  return n;
};

