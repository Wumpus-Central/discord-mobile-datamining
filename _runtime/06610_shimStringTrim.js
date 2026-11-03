// _runtime/06610_shimStringTrim.js
import _mod1472 from "metro/01472__.js";
import defineDataProperty from "01473_defineDataProperty.js";
import _mod6603 from "metro/06603__.js";

let closure_2 = _mod1472();

export default function shimStringTrim() {
  const tmp3 = _mod6603();
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
