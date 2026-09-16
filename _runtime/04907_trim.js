// _runtime/04907_trim.js
import RequireObjectCoercible from "04896_RequireObjectCoercible.js";
import _mod4908 from "metro/04908__.js";
import _mod4909 from "metro/04909__.js";
import shimStringTrim from "04915_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "04911_defineProperty.js";

let closure_2 = callBind(_mod4908());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4908;
obj.implementation = _mod4909;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
