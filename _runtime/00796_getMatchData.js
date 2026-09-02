// === Module 796: getMatchData ===

// Module 796 (getMatchData)
import keys from "keys" /* 613 */;
import isStrictComparable from "isStrictComparable" /* 720 */;


export default function getMatchData(arg0) {
  let tmp7;
  const arr = keys(arg0);
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp3 = arr[diff];
      let tmp4 = arg0[tmp3];
      let items = [tmp3, tmp4, ];
      let tmp5 = require;
      let tmp6 = dependencyMap;
      items[2] = isStrictComparable(tmp4);
      arr[diff] = items;
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (tmp7);
  }
  return arr;
};