// === Module 5120: shimStringTrim ===

// Module 5120 (shimStringTrim)
import _mod1457 from "module_1457" /* 1457 */;
import defineDataProperty from "defineDataProperty" /* 1458 */;
import _mod5113 from "module_5113" /* 5113 */;

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod5113();
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