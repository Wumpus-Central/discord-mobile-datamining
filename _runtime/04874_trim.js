// _runtime/04874_trim.js
import RequireObjectCoercible from "04863_RequireObjectCoercible.js";
import _mod4875 from "metro/04875__.js";
import _mod4876 from "metro/04876__.js";
import shimStringTrim from "04882_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04878_defineProperty.js";

let closure_2 = callBind(_mod4875());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4875;
obj.implementation = _mod4876;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
