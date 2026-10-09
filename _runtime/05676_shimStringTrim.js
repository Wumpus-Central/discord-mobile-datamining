// === Module 5676: shimStringTrim ===

// Module 5676 (shimStringTrim)
import _mod1476 from "module_1476" /* 1476 */;
import defineDataProperty from "defineDataProperty" /* 1477 */;
import _mod5669 from "module_5669" /* 5669 */;

let closure_2 = _mod1476();

export default function shimStringTrim() {
  const tmp3 = _mod5669();
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