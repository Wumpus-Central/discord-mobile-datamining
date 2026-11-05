// _runtime/06620_trim.js
import RequireObjectCoercible from "06609_RequireObjectCoercible.js";
import _mod6621 from "metro/06621__.js";
import _mod6622 from "metro/06622__.js";
import shimStringTrim from "06628_shimStringTrim.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06624__.js";

let closure_2 = callBind(_mod6621());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6621;
obj.implementation = _mod6622;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
