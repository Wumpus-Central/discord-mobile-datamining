// _runtime/05112_trim.js
import RequireObjectCoercible from "05101_RequireObjectCoercible.js";
import _mod5113 from "metro/05113__.js";
import _mod5114 from "metro/05114__.js";
import shimStringTrim from "05120_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05116__.js";

let closure_2 = callBind(_mod5113());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5113;
obj.implementation = _mod5114;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
