// _runtime/06476_trim.js
import RequireObjectCoercible from "06465_RequireObjectCoercible.js";
import _mod6477 from "metro/06477__.js";
import _mod6478 from "metro/06478__.js";
import shimStringTrim from "06484_shimStringTrim.js";
import callBind from "01469_callBind.js";
import defineProperty from "metro/06480__.js";

let closure_2 = callBind(_mod6477());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6477;
obj.implementation = _mod6478;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
