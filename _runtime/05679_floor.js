// === Module 5679: floor ===

// Module 5679 (floor)
import _mod1331 from "module_1331" /* 1331 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1331(arg0);
  }
  return tmp;
};