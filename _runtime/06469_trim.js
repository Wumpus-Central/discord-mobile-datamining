// _runtime/06469_trim.js
import RequireObjectCoercible from "06458_RequireObjectCoercible.js";
import _mod6470 from "metro/06470__.js";
import _mod6471 from "metro/06471__.js";
import shimStringTrim from "06477_shimStringTrim.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/06473__.js";

let closure_2 = callBind(_mod6470());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6470;
obj.implementation = _mod6471;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
