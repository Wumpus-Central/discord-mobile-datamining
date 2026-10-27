// _runtime/06419_shimStringTrim.js
import _mod1475 from "metro/01475__.js";
import defineDataProperty from "01476_defineDataProperty.js";
import _mod6412 from "metro/06412__.js";

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
}
