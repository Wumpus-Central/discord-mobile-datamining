// === Module 6407: floor ===

// Module 6407 (floor)
import _mod1333 from "module_1333" /* 1333 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1333(arg0);
  }
  return tmp;
};