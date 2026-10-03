// === Module 5357: shimStringTrim ===

// Module 5357 (shimStringTrim)
import _mod1463 from "module_1463" /* 1463 */;
import defineDataProperty from "defineDataProperty" /* 1464 */;
import _mod5350 from "module_5350" /* 5350 */;

let closure_2 = _mod1463();

export default function shimStringTrim() {
  const tmp3 = _mod5350();
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