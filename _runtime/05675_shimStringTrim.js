// _runtime/05675_shimStringTrim.js
import _mod1475 from "metro/01475__.js";
import defineDataProperty from "01476_defineDataProperty.js";
import _mod5668 from "metro/05668__.js";

let closure_2 = _mod1475();

export default function shimStringTrim() {
  const tmp3 = _mod5668();
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
