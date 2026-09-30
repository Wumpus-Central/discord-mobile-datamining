// === Module 5315: trim ===

// Module 5315 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5304 */;
import _mod5316 from "module_5316" /* 5316 */;
import _mod5317 from "module_5317" /* 5317 */;
import shimStringTrim from "shimStringTrim" /* 5323 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5319" /* 5319 */;

let closure_2 = callBind(_mod5316());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5316;
obj.implementation = _mod5317;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;