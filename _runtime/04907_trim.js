// === Module 4907: trim ===

// Module 4907 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4896 */;
import _mod4908 from "module_4908" /* 4908 */;
import _mod4909 from "module_4909" /* 4909 */;
import shimStringTrim from "shimStringTrim" /* 4915 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4911 */;

let closure_2 = callBind(_mod4908());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4908;
obj.implementation = _mod4909;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;