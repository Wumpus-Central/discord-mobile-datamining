// === Module 5071: sortedIndexBy ===

// Module 5071 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 5072 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};