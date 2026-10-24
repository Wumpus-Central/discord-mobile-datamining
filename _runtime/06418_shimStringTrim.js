// _runtime/06418_shimStringTrim.js
import _mod1478 from "metro/01478__.js";
import defineDataProperty from "01479_defineDataProperty.js";
import _mod6411 from "metro/06411__.js";

let closure_2 = _mod1478();

export default function shimStringTrim() {
  const tmp3 = _mod6411();
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
