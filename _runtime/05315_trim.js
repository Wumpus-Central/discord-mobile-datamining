// _runtime/05315_trim.js
import RequireObjectCoercible from "05304_RequireObjectCoercible.js";
import _mod5316 from "metro/05316__.js";
import _mod5317 from "metro/05317__.js";
import shimStringTrim from "05323_shimStringTrim.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05319__.js";

let closure_2 = callBind(_mod5316());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5316;
obj.implementation = _mod5317;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
