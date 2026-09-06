// === Module 4840: floor ===

// Module 4840 (floor)
import _mod1308 from "module_1308" /* 1308 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1308(arg0);
  }
  return tmp;
};