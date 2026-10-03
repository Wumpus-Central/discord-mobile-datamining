// === Module 4505: sortedIndexBy ===

// Module 4505 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4506 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};