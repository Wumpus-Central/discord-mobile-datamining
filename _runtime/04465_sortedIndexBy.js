// _runtime/04465_sortedIndexBy.js
import baseIteratee from "00584_baseIteratee.js";
import baseSortedIndexBy from "04466_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
}
