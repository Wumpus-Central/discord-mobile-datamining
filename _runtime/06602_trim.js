// _runtime/06602_trim.js
import RequireObjectCoercible from "06591_RequireObjectCoercible.js";
import _mod6603 from "metro/06603__.js";
import _mod6604 from "metro/06604__.js";
import shimStringTrim from "06610_shimStringTrim.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06606__.js";

let closure_2 = callBind(_mod6603());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6603;
obj.implementation = _mod6604;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
