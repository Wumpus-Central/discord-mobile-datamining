// _runtime/06410_trim.js
import RequireObjectCoercible from "06399_RequireObjectCoercible.js";
import _mod6411 from "metro/06411__.js";
import _mod6412 from "metro/06412__.js";
import shimStringTrim from "06418_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06414__.js";

let closure_2 = callBind(_mod6411());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6411;
obj.implementation = _mod6412;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
