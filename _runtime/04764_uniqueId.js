// === Module 4764: uniqueId ===

// Module 4764 (uniqueId)
import toString from "toString" /* 626 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};