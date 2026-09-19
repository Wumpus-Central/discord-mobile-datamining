// _runtime/05024_trim.js
import RequireObjectCoercible from "05013_RequireObjectCoercible.js";
import _mod5025 from "metro/05025__.js";
import _mod5026 from "metro/05026__.js";
import shimStringTrim from "05032_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05028__.js";

let closure_2 = callBind(_mod5025());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5025;
obj.implementation = _mod5026;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
