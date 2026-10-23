// _runtime/06395_trim.js
import RequireObjectCoercible from "06384_RequireObjectCoercible.js";
import _mod6396 from "metro/06396__.js";
import _mod6397 from "metro/06397__.js";
import shimStringTrim from "06403_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06399__.js";

let closure_2 = callBind(_mod6396());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6396;
obj.implementation = _mod6397;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
