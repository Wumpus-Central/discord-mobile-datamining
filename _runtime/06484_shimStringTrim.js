// === Module 6484: shimStringTrim ===

// Module 6484 (shimStringTrim)
import _mod1471 from "module_1471" /* 1471 */;
import defineDataProperty from "defineDataProperty" /* 1472 */;
import _mod6477 from "module_6477" /* 6477 */;

let closure_2 = _mod1471();

export default function shimStringTrim() {
  const tmp3 = _mod6477();
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