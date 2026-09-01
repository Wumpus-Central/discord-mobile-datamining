// === Module 4782: trim ===

// Module 4782 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4771 */;
import getPolyfill from "getPolyfill" /* 4783 */;
import trim2 from "trim" /* 4784 */;
import shimStringTrim from "shimStringTrim" /* 4790 */;
import callBind from "callBind" /* 1418 */;
import defineProperty from "defineProperty" /* 4786 */;

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