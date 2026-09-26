// === Module 5119: trim ===

// Module 5119 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5108 */;
import _mod5120 from "module_5120" /* 5120 */;
import _mod5121 from "module_5121" /* 5121 */;
import shimStringTrim from "shimStringTrim" /* 5127 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5123" /* 5123 */;

let closure_2 = callBind(_mod5120());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5120;
obj.implementation = _mod5121;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;