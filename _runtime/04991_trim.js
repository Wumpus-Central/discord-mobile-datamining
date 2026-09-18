// _runtime/04991_trim.js
import RequireObjectCoercible from "04980_RequireObjectCoercible.js";
import _mod4992 from "metro/04992__.js";
import _mod4993 from "metro/04993__.js";
import shimStringTrim from "04999_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/04995__.js";

let closure_2 = callBind(_mod4992());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4992;
obj.implementation = _mod4993;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
