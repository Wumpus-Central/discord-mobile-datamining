// === Module 5349: trim ===

// Module 5349 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5338 */;
import _mod5350 from "module_5350" /* 5350 */;
import _mod5351 from "module_5351" /* 5351 */;
import shimStringTrim from "shimStringTrim" /* 5357 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5353" /* 5353 */;

let closure_2 = callBind(_mod5350());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5350;
obj.implementation = _mod5351;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;