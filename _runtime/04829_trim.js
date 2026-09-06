// _runtime/04829_trim.js
import RequireObjectCoercible from "04818_RequireObjectCoercible.js";
import getPolyfill from "04830_getPolyfill.js";
import trim2 from "04831_trim.js";
import shimStringTrim from "04837_shimStringTrim.js";
import callBind from "01454_callBind.js";
import defineProperty from "04833_defineProperty.js";

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
