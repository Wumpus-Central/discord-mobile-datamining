// === Module 4758: shimStringTrim ===

// Module 4758 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1420 */;
import defineDataProperty from "defineDataProperty" /* 1421 */;
import getPolyfill from "getPolyfill" /* 4751 */;

let closure_2 = hasPropertyDescriptors();

export default function shimStringTrim() {
  const tmp3 = getPolyfill();
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