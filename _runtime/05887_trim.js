// _runtime/05887_trim.js
import RequireObjectCoercible from "05876_RequireObjectCoercible.js";
import _mod5888 from "metro/05888__.js";
import _mod5889 from "metro/05889__.js";
import shimStringTrim from "05895_shimStringTrim.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05891__.js";

let closure_2 = callBind(_mod5888());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5888;
obj.implementation = _mod5889;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
