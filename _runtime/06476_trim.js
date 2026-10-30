// === Module 6476: trim ===

// Module 6476 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6465 */;
import _mod6477 from "module_6477" /* 6477 */;
import _mod6478 from "module_6478" /* 6478 */;
import shimStringTrim from "shimStringTrim" /* 6484 */;
import callBind from "callBind" /* 1469 */;
import defineProperty from "module_6480" /* 6480 */;

let closure_2 = callBind(_mod6477());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6477;
obj.implementation = _mod6478;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;