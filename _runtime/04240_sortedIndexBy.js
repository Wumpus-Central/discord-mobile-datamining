// === Module 4240: sortedIndexBy ===

// Module 4240 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4241 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};