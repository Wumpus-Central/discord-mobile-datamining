// === Module 4494: sortedIndexBy ===

// Module 4494 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4495 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};