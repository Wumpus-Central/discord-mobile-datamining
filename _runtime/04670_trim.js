// === Module 4670: trim ===

// Module 4670 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4659 */;
import getPolyfill from "getPolyfill" /* 4671 */;
import trim2 from "trim" /* 4672 */;
import shimStringTrim from "shimStringTrim" /* 4678 */;
import callBind from "callBind" /* 1422 */;
import defineProperty from "defineProperty" /* 4674 */;

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