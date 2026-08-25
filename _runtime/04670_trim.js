// _runtime/04670_trim.js
import RequireObjectCoercible from "04659_RequireObjectCoercible.js";
import getPolyfill from "04671_getPolyfill.js";
import trim2 from "04672_trim.js";
import shimStringTrim from "04678_shimStringTrim.js";
import callBind from "01422_callBind.js";
import defineProperty from "04674_defineProperty.js";

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