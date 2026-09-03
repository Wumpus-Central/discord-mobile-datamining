// === Module 4783: trim ===

// Module 4783 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4772 */;
import getPolyfill from "getPolyfill" /* 4784 */;
import trim2 from "trim" /* 4785 */;
import shimStringTrim from "shimStringTrim" /* 4791 */;
import callBind from "callBind" /* 1417 */;
import defineProperty from "defineProperty" /* 4787 */;

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