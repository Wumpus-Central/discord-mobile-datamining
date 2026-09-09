// _runtime/04843_trim.js
import RequireObjectCoercible from "04832_RequireObjectCoercible.js";
import _mod4844 from "metro/04844__.js";
import _mod4845 from "metro/04845__.js";
import shimStringTrim from "04851_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04847_defineProperty.js";

let closure_2 = callBind(_mod4844());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4844;
obj.implementation = _mod4845;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
