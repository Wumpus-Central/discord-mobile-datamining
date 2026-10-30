// === Module 4937: sortedIndexBy ===

// Module 4937 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4938 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};