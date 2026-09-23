// _runtime/05109_trim.js
import RequireObjectCoercible from "05098_RequireObjectCoercible.js";
import _mod5110 from "metro/05110__.js";
import _mod5111 from "metro/05111__.js";
import shimStringTrim from "05117_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05113__.js";

let closure_2 = callBind(_mod5110());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5110;
obj.implementation = _mod5111;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
