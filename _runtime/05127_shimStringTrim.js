// _runtime/05127_shimStringTrim.js
import _mod1458 from "metro/01458__.js";
import defineDataProperty from "01459_defineDataProperty.js";
import _mod5120 from "metro/05120__.js";

let closure_2 = _mod1458();

export default function shimStringTrim() {
  const tmp3 = _mod5120();
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
