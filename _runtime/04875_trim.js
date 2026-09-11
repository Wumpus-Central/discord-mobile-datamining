// _runtime/04875_trim.js
import RequireObjectCoercible from "04864_RequireObjectCoercible.js";
import _mod4876 from "metro/04876__.js";
import _mod4877 from "metro/04877__.js";
import shimStringTrim from "04883_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04879_defineProperty.js";

let closure_2 = callBind(_mod4876());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4876;
obj.implementation = _mod4877;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
