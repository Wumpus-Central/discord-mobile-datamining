// === Module 4415: trim ===

// Module 4415 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4404 */;
import getPolyfill from "getPolyfill" /* 4416 */;
import trim2 from "trim" /* 4417 */;
import shimStringTrim from "shimStringTrim" /* 4423 */;
import callBind from "callBind" /* 1422 */;
import defineProperty from "defineProperty" /* 4419 */;

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