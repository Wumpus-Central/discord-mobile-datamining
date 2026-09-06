// === Module 4829: trim ===

// Module 4829 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4818 */;
import getPolyfill from "getPolyfill" /* 4830 */;
import trim2 from "trim" /* 4831 */;
import shimStringTrim from "shimStringTrim" /* 4837 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4833 */;

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