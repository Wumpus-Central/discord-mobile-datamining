// === Module 5897: shimStringTrim ===

// Module 5897 (shimStringTrim)
import _mod1478 from "module_1478" /* 1478 */;
import defineDataProperty from "defineDataProperty" /* 1479 */;
import _mod5890 from "module_5890" /* 5890 */;

let closure_2 = _mod1478();

export default function shimStringTrim() {
  const tmp3 = _mod5890();
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