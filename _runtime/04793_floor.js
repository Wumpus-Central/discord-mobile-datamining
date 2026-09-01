// === Module 4793: floor ===

// Module 4793 (floor)
import _mod566 from "module_566" /* 566 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod566(arg0);
  }
  return tmp;
};