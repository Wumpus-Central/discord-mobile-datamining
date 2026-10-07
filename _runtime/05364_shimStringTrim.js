// _runtime/05364_shimStringTrim.js
import _mod1463 from "metro/01463__.js";
import defineDataProperty from "01464_defineDataProperty.js";
import _mod5357 from "metro/05357__.js";

let closure_2 = _mod1463();

export default function shimStringTrim() {
  const tmp3 = _mod5357();
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
