// === Module 4909: trim ===

// Module 4909 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4898 */;
import _mod4910 from "module_4910" /* 4910 */;
import _mod4911 from "module_4911" /* 4911 */;
import shimStringTrim from "shimStringTrim" /* 4917 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4913 */;

let closure_2 = callBind(_mod4910());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4910;
obj.implementation = _mod4911;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;