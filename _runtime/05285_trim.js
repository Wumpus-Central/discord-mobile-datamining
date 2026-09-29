// _runtime/05285_trim.js
import RequireObjectCoercible from "05274_RequireObjectCoercible.js";
import _mod5286 from "metro/05286__.js";
import _mod5287 from "metro/05287__.js";
import shimStringTrim from "05293_shimStringTrim.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05289__.js";

let closure_2 = callBind(_mod5286());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5286;
obj.implementation = _mod5287;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
