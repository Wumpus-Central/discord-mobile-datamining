// _runtime/05094_uniqueId.js
import toString from "00637_toString.js";

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
}
