// _runtime/04783_trim.js
import RequireObjectCoercible from "04772_RequireObjectCoercible.js";
import getPolyfill from "04784_getPolyfill.js";
import trim2 from "04785_trim.js";
import shimStringTrim from "04791_shimStringTrim.js";
import callBind from "01417_callBind.js";
import defineProperty from "04787_defineProperty.js";

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return callback(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = trim2;
obj[2] = shimStringTrim;
defineProperty(trim, obj);

export default trim;
