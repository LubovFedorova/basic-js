const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let arr = [];
      for (let cat of backyard) {
        let result = cat.filter(item => item === '^^' ); 
        arr = arr.concat(result);
      }
      return arr.length;
};
