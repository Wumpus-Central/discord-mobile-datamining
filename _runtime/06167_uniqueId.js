// === Module 6167: uniqueId ===

// Module 6167 (uniqueId)
import _mod625 from "module_625" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return _mod625(arg0) + sum;
};