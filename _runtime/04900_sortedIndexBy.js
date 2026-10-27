// === Module 4900: sortedIndexBy ===

// Module 4900 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4901 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};