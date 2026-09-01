// _runtime/04782_trim.js
import RequireObjectCoercible from "04771_RequireObjectCoercible.js";
import getPolyfill from "04783_getPolyfill.js";
import trim2 from "04784_trim.js";
import shimStringTrim from "04790_shimStringTrim.js";
import callBind from "01418_callBind.js";
import defineProperty from "04786_defineProperty.js";

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
