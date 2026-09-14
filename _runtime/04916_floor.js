// === Module 4916: floor ===

// Module 4916 (floor)
import _mod1306 from "module_1306" /* 1306 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1306(arg0);
  }
  return tmp;
};