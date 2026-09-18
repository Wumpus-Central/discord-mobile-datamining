// === Module 4991: trim ===

// Module 4991 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4980 */;
import _mod4992 from "module_4992" /* 4992 */;
import _mod4993 from "module_4993" /* 4993 */;
import shimStringTrim from "shimStringTrim" /* 4999 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_4995" /* 4995 */;

let closure_2 = callBind(_mod4992());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4992;
obj.implementation = _mod4993;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;