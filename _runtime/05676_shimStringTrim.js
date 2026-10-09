// _runtime/05676_shimStringTrim.js
import _mod1476 from "metro/01476__.js";
import defineDataProperty from "01477_defineDataProperty.js";
import _mod5669 from "metro/05669__.js";

let closure_2 = _mod1476();

export default function shimStringTrim() {
  const tmp3 = _mod5669();
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
