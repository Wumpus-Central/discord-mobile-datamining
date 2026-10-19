// _runtime/06364_trim.js
import RequireObjectCoercible from "06353_RequireObjectCoercible.js";
import _mod6365 from "metro/06365__.js";
import _mod6366 from "metro/06366__.js";
import shimStringTrim from "06372_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06368__.js";

let closure_2 = callBind(_mod6365());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6365;
obj.implementation = _mod6366;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
