// === Module 4742: shimStringTrim ===

// Module 4742 (shimStringTrim)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1424 */;
import defineDataProperty from "defineDataProperty" /* 1425 */;
import getPolyfill from "getPolyfill" /* 4735 */;

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