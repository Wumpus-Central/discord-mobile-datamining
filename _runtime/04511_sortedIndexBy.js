// _runtime/04511_sortedIndexBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseSortedIndexBy from "04512_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
}
