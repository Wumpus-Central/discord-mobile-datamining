// === Module 5111: trim ===

// Module 5111 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5100 */;
import _mod5112 from "module_5112" /* 5112 */;
import _mod5113 from "module_5113" /* 5113 */;
import shimStringTrim from "shimStringTrim" /* 5119 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5115" /* 5115 */;

let closure_2 = callBind(_mod5112());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5112;
obj.implementation = _mod5113;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;