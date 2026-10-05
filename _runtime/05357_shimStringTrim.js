// === Module 5357: shimStringTrim ===

// Module 5357 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1463 */;
import defineDataProperty from "defineDataProperty" /* 1464 */;
import getPolyfill from "getPolyfill" /* 5350 */;

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