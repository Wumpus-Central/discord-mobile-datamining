// _runtime/06396_trim.js
import RequireObjectCoercible from "06385_RequireObjectCoercible.js";
import _mod6397 from "metro/06397__.js";
import _mod6398 from "metro/06398__.js";
import shimStringTrim from "06404_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06400__.js";

let closure_2 = callBind(_mod6397());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6397;
obj.implementation = _mod6398;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
