// === Module 5667: trim ===

// Module 5667 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5656 */;
import _mod5668 from "module_5668" /* 5668 */;
import _mod5669 from "module_5669" /* 5669 */;
import shimStringTrim from "shimStringTrim" /* 5675 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_5671" /* 5671 */;

let closure_2 = callBind(_mod5668());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5668;
obj.implementation = _mod5669;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;