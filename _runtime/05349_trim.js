// === Module 5349: trim ===

// Module 5349 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5338 */;
import getPolyfill from "getPolyfill" /* 5350 */;
import trim2 from "trim" /* 5351 */;
import shimStringTrim from "shimStringTrim" /* 5357 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5353 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;