// _runtime/05025_trim.js
import RequireObjectCoercible from "05014_RequireObjectCoercible.js";
import _mod5026 from "metro/05026__.js";
import _mod5027 from "metro/05027__.js";
import shimStringTrim from "05033_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05029__.js";

let closure_2 = callBind(_mod5026());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5026;
obj.implementation = _mod5027;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
