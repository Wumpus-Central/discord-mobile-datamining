// === Module 4920: floor ===

// Module 4920 (floor)
import _mod1307 from "module_1307" /* 1307 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1307(arg0);
  }
  return tmp;
};