// === Module 4087: sortedIndexBy ===

// Module 4087 (sortedIndexBy)
import baseIteratee from "baseIteratee" /* 720 */;
import baseSortedIndexBy from "baseSortedIndexBy" /* 4088 */;


export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy(arg0, arg1, baseIteratee(arg2, 2));
};