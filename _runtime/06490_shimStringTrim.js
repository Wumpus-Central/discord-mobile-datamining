// === Module 6490: shimStringTrim ===

// Module 6490 (shimStringTrim)
import _mod1470 from "module_1470" /* 1470 */;
import defineDataProperty from "defineDataProperty" /* 1471 */;
import _mod6483 from "module_6483" /* 6483 */;

let closure_2 = _mod1470();

export default function shimStringTrim() {
  const tmp3 = _mod6483();
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