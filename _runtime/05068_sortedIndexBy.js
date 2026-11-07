// _runtime/05068_sortedIndexBy.js
import baseIteratee from "00583_baseIteratee.js";
import baseSortedIndexBy from "05069_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
}
