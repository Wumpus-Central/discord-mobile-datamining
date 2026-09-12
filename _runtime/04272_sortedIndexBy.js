// _runtime/04272_sortedIndexBy.js
import baseIteratee from "00584_baseIteratee.js";
import baseSortedIndexBy from "04273_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
}
