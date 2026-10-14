// _runtime/05676_trim.js
import RequireObjectCoercible from "05665_RequireObjectCoercible.js";
import _mod5677 from "metro/05677__.js";
import _mod5678 from "metro/05678__.js";
import shimStringTrim from "05684_shimStringTrim.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05680__.js";

let closure_2 = callBind(_mod5677());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5677;
obj.implementation = _mod5678;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
