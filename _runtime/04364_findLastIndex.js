// _runtime/04364_findLastIndex.js

export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return require("04367_baseFindIndex.js") /* baseFindIndex */(arg0, require("00720_baseIteratee.js") /* baseIteratee */(arg1, 3), diff, true);
    } else {
      let sum = require("04365_toInteger.js") /* toInteger */(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp7 = max(sum, 0);
      } else {
        tmp7 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};