// === Module 5356: trim ===

// Module 5356 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5345 */;
import getPolyfill from "getPolyfill" /* 5357 */;
import trim2 from "trim" /* 5358 */;
import shimStringTrim from "shimStringTrim" /* 5364 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5360 */;

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;