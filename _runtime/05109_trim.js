// === Module 5109: trim ===

// Module 5109 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5098 */;
import _mod5110 from "module_5110" /* 5110 */;
import _mod5111 from "module_5111" /* 5111 */;
import shimStringTrim from "shimStringTrim" /* 5117 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5113" /* 5113 */;

let closure_2 = callBind(_mod5110());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5110;
obj.implementation = _mod5111;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;