// === Module 5293: shimStringTrim ===

// Module 5293 (shimStringTrim)
import _mod1458 from "module_1458" /* 1458 */;
import defineDataProperty from "defineDataProperty" /* 1459 */;
import _mod5286 from "module_5286" /* 5286 */;

let closure_2 = _mod1458();

export default function shimStringTrim() {
  const tmp3 = _mod5286();
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