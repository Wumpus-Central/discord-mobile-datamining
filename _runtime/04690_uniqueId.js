// _runtime/04690_uniqueId.js
import toString from "00762_toString.js";

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};