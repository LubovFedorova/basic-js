const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr =[];
    for (let member of members) {
      if (typeof member === 'string') {
        let r = member.trim().split('');
        let upperR = r[0].toUpperCase();
        arr.push(upperR);
      } else {
        continue;
      }
    }
    function compare(a,b) {
          if(a>b) return 1;
          if (a==b) return 0;
          if (a<b) return -1;
        }
    return arr.sort(compare).join('');
  } else {
    return false
  }
};
