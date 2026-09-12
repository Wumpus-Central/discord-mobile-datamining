// === Module 4913: shimStringTrim ===

// Module 4913 (shimStringTrim)
import _mod1456 from "module_1456" /* 1456 */;
import defineDataProperty from "defineDataProperty" /* 1457 */;
import _mod4906 from "module_4906" /* 4906 */;

let closure_2 = _mod1456();

export default function shimStringTrim() {
  const tmp3 = _mod4906();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = defineDataProperty;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};