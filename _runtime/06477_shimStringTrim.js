// === Module 6477: shimStringTrim ===

// Module 6477 (shimStringTrim)
import _mod1476 from "module_1476" /* 1476 */;
import defineDataProperty from "defineDataProperty" /* 1477 */;
import _mod6470 from "module_6470" /* 6470 */;

let closure_2 = _mod1476();

export default function shimStringTrim() {
  const tmp3 = _mod6470();
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