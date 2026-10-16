// === Module 5898: shimStringTrim ===

// Module 5898 (shimStringTrim)
import _mod1478 from "module_1478" /* 1478 */;
import defineDataProperty from "defineDataProperty" /* 1479 */;
import _mod5891 from "module_5891" /* 5891 */;

let closure_2 = _mod1478();

export default function shimStringTrim() {
  const tmp3 = _mod5891();
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