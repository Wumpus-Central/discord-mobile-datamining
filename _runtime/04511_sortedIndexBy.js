// _runtime/04511_sortedIndexBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseSortedIndexBy from "04512_baseSortedIndexBy.js";

export default function sortedIndexBy(arg0, arg1, arg2) {
  const tmp = baseSortedIndexBy;
  return tmp(arg0, arg1, baseIteratee(arg2, 2));
}
