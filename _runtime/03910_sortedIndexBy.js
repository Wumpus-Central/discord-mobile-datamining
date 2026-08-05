// _runtime/03910_sortedIndexBy.js

export default function sortedIndexBy(arg0, arg1, arg2) {
  return require("03911_baseSortedIndexBy.js") /* baseSortedIndexBy */(arg0, arg1, require("00720_baseIteratee.js") /* baseIteratee */(arg2, 2));
};