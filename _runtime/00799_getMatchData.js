// _runtime/00799_getMatchData.js
import { keys } from "00616_keys.js";
import { isStrictComparable } from "00723_isStrictComparable.js";

export default function getMatchData(arg0) {
  let tmp7;
  const arr = keys /* keys */(arg0);
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp3 = arr[diff];
      let tmp4 = arg0[tmp3];
      let items = [tmp3, tmp4, ];
      let tmp5 = require;
      let tmp6 = dependencyMap;
      items[2] = isStrictComparable /* isStrictComparable */(tmp4);
      arr[diff] = items;
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (tmp7);
  }
  return arr;
};