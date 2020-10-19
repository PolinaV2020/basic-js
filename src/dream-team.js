const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      result.push(members[i].charAt(0).toUpperCase());
    }
  }
      return result;
};

