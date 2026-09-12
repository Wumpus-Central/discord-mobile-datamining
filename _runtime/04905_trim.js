// _runtime/04905_trim.js
import RequireObjectCoercible from "04894_RequireObjectCoercible.js";
import _mod4906 from "metro/04906__.js";
import _mod4907 from "metro/04907__.js";
import shimStringTrim from "04913_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04909_defineProperty.js";

let closure_2 = callBind(_mod4906());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4906;
obj.implementation = _mod4907;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
