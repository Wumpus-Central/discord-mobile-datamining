// _runtime/04915_shimStringTrim.js
import _mod1457 from "metro/01457__.js";
import defineDataProperty from "01458_defineDataProperty.js";
import _mod4908 from "metro/04908__.js";

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod4908();
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
}
