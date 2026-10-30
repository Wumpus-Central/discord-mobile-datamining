// _runtime/04937_sortedIndexBy.js
import baseIteratee from "00583_baseIteratee.js";
import baseSortedIndexBy from "04938_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
}
