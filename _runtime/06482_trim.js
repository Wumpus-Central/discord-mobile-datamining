// _runtime/06482_trim.js
import RequireObjectCoercible from "06471_RequireObjectCoercible.js";
import _mod6483 from "metro/06483__.js";
import _mod6484 from "metro/06484__.js";
import shimStringTrim from "06490_shimStringTrim.js";
import callBind from "01468_callBind.js";
import defineProperty from "metro/06486__.js";

let closure_2 = callBind(_mod6483());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6483;
obj.implementation = _mod6484;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
