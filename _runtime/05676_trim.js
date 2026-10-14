// === Module 5676: trim ===

// Module 5676 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5665 */;
import _mod5677 from "module_5677" /* 5677 */;
import _mod5678 from "module_5678" /* 5678 */;
import shimStringTrim from "shimStringTrim" /* 5684 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5680" /* 5680 */;

let closure_2 = callBind(_mod5677());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5677;
obj.implementation = _mod5678;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;