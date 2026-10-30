// === Module 6487: floor ===

// Module 6487 (floor)
import _mod1319 from "module_1319" /* 1319 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1319(arg0);
  }
  return tmp;
};