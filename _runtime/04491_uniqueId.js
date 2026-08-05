import { toString } from "00762_toString.js";
// _runtime/04491_uniqueId.js
let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString /* toString */(arg0) + sum;
};