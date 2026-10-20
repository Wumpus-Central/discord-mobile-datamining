// _runtime/06367_trim.js
import RequireObjectCoercible from "06356_RequireObjectCoercible.js";
import _mod6368 from "metro/06368__.js";
import _mod6369 from "metro/06369__.js";
import shimStringTrim from "06375_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06371__.js";

let closure_2 = callBind(_mod6368());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6368;
obj.implementation = _mod6369;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
