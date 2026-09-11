// _runtime/04883_shimStringTrim.js
import _mod1456 from "metro/01456__.js";
import defineDataProperty from "01457_defineDataProperty.js";
import _mod4876 from "metro/04876__.js";

let closure_2 = _mod1456();

export default function shimStringTrim() {
  const tmp3 = _mod4876();
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
