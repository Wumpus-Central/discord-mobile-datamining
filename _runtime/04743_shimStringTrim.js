// _runtime/04743_shimStringTrim.js
import hasPropertyDescriptors from "01424_hasPropertyDescriptors.js";
import defineDataProperty from "01425_defineDataProperty.js";
import getPolyfill from "04736_getPolyfill.js";

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