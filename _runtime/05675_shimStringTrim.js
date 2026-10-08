// === Module 5675: shimStringTrim ===

// Module 5675 (shimStringTrim)
import _mod1475 from "module_1475" /* 1475 */;
import defineDataProperty from "defineDataProperty" /* 1476 */;
import _mod5668 from "module_5668" /* 5668 */;

let closure_2 = _mod1475();

export default function shimStringTrim() {
  const tmp3 = _mod5668();
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