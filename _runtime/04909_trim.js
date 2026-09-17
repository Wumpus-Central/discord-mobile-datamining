// _runtime/04909_trim.js
import RequireObjectCoercible from "04898_RequireObjectCoercible.js";
import _mod4910 from "metro/04910__.js";
import _mod4911 from "metro/04911__.js";
import shimStringTrim from "04917_shimStringTrim.js";
import callBind from "01455_callBind.js";
import defineProperty from "04913_defineProperty.js";

let closure_2 = callBind(_mod4910());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4910;
obj.implementation = _mod4911;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
