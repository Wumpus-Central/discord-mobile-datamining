// === Module 5668: trim ===

// Module 5668 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5657 */;
import _mod5669 from "module_5669" /* 5669 */;
import _mod5670 from "module_5670" /* 5670 */;
import shimStringTrim from "shimStringTrim" /* 5676 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5672" /* 5672 */;

let closure_2 = callBind(_mod5669());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5669;
obj.implementation = _mod5670;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;