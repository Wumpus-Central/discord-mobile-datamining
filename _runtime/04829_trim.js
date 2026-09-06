// _runtime/04829_trim.js
import RequireObjectCoercible from "04818_RequireObjectCoercible.js";
import _mod4830 from "metro/04830__.js";
import _mod4831 from "metro/04831__.js";
import shimStringTrim from "04837_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04833_defineProperty.js";

let closure_2 = callBind(_mod4830());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4830;
obj.implementation = _mod4831;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
