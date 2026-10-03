// === Module 5094: uniqueId ===

// Module 5094 (uniqueId)
import _mod637 from "module_637" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return _mod637(arg0) + sum;
};