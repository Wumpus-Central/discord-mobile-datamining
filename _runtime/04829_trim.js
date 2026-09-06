// === Module 4829: trim ===

// Module 4829 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4818 */;
import _mod4830 from "module_4830" /* 4830 */;
import _mod4831 from "module_4831" /* 4831 */;
import shimStringTrim from "shimStringTrim" /* 4837 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4833 */;

let closure_2 = callBind(_mod4830());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4830;
obj.implementation = _mod4831;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;