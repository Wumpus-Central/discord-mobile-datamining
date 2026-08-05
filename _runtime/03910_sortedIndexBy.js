import { baseIteratee } from "00720_baseIteratee.js";
import { baseSortedIndexBy } from "03911_baseSortedIndexBy.js";
// _runtime/03910_sortedIndexBy.js

export default function sortedIndexBy(arg0, arg1, arg2) {
  return baseSortedIndexBy /* baseSortedIndexBy */(arg0, arg1, baseIteratee /* baseIteratee */(arg2, 2));
};