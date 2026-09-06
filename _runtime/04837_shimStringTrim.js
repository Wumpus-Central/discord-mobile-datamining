// === Module 4837: shimStringTrim ===

// Module 4837 (shimStringTrim)
import _mod1456 from "module_1456" /* 1456 */;
import defineDataProperty from "defineDataProperty" /* 1457 */;
import _mod4830 from "module_4830" /* 4830 */;

let closure_2 = _mod1456();

export default function shimStringTrim() {
  const tmp3 = _mod4830();
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