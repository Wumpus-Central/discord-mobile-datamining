// === Module 6419: shimStringTrim ===

// Module 6419 (shimStringTrim)
import _mod1475 from "module_1475" /* 1475 */;
import defineDataProperty from "defineDataProperty" /* 1476 */;
import _mod6412 from "module_6412" /* 6412 */;

let closure_2 = _mod1475();

export default function shimStringTrim() {
  const tmp3 = _mod6412();
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