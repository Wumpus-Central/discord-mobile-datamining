// _runtime/04088_sortedIndexBy.js
import baseIteratee from "00720_baseIteratee.js";
import baseSortedIndexBy from "04089_baseSortedIndexBy.js";


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};