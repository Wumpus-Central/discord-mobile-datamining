// _runtime/05349_trim.js
import RequireObjectCoercible from "05338_RequireObjectCoercible.js";
import _mod5350 from "metro/05350__.js";
import _mod5351 from "metro/05351__.js";
import shimStringTrim from "05357_shimStringTrim.js";
import callBind from "01461_callBind.js";
import defineProperty from "metro/05353__.js";

let closure_2 = callBind(_mod5350());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5350;
obj.implementation = _mod5351;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
