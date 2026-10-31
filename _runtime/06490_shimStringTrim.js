// _runtime/06490_shimStringTrim.js
import _mod1470 from "metro/01470__.js";
import defineDataProperty from "01471_defineDataProperty.js";
import _mod6483 from "metro/06483__.js";

let closure_2 = _mod1470();

export default function shimStringTrim() {
  const tmp3 = _mod6483();
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
