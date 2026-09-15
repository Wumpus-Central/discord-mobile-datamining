// === Module 4908: trim ===

// Module 4908 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4897 */;
import _mod4909 from "module_4909" /* 4909 */;
import _mod4910 from "module_4910" /* 4910 */;
import shimStringTrim from "shimStringTrim" /* 4916 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4912 */;

let closure_2 = callBind(_mod4909());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4909;
obj.implementation = _mod4910;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;