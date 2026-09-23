// _runtime/05117_shimStringTrim.js
import _mod1457 from "metro/01457__.js";
import defineDataProperty from "01458_defineDataProperty.js";
import _mod5110 from "metro/05110__.js";

let closure_2 = _mod1457();

export default function shimStringTrim() {
  const tmp3 = _mod5110();
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
