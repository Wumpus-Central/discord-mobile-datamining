// _runtime/05111_trim.js
import RequireObjectCoercible from "05100_RequireObjectCoercible.js";
import _mod5112 from "metro/05112__.js";
import _mod5113 from "metro/05113__.js";
import shimStringTrim from "05119_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05115__.js";

let closure_2 = callBind(_mod5112());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5112;
obj.implementation = _mod5113;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
