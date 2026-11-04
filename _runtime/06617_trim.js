// _runtime/06617_trim.js
import RequireObjectCoercible from "06606_RequireObjectCoercible.js";
import _mod6618 from "metro/06618__.js";
import _mod6619 from "metro/06619__.js";
import shimStringTrim from "06625_shimStringTrim.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06621__.js";

let closure_2 = callBind(_mod6618());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6618;
obj.implementation = _mod6619;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
