// === Module 6610: shimStringTrim ===

// Module 6610 (shimStringTrim)
import _mod1472 from "module_1472" /* 1472 */;
import defineDataProperty from "defineDataProperty" /* 1473 */;
import _mod6603 from "module_6603" /* 6603 */;

let closure_2 = _mod1472();

export default function shimStringTrim() {
  const tmp3 = _mod6603();
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