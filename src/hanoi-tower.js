const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsResult = 2 ** disksNumber - 1;
  let secondsResult = Math.floor((turnsResult / turnsSpeed) * 3600);
  let result = { turns: turnsResult, seconds: secondsResult };
  return result;
};

