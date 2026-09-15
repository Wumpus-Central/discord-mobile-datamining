// === Module 4916: shimStringTrim ===

// Module 4916 (shimStringTrim)
import _mod1457 from "module_1457" /* 1457 */;
import defineDataProperty from "defineDataProperty" /* 1458 */;
import _mod4909 from "module_4909" /* 4909 */;

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod4909();
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