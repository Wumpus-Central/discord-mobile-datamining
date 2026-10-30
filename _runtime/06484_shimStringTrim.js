// _runtime/06484_shimStringTrim.js
import _mod1471 from "metro/01471__.js";
import defineDataProperty from "01472_defineDataProperty.js";
import _mod6477 from "metro/06477__.js";

let closure_2 = _mod1471();

export default function shimStringTrim() {
  const tmp3 = _mod6477();
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
