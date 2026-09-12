// === Module 4905: trim ===

// Module 4905 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4894 */;
import _mod4906 from "module_4906" /* 4906 */;
import _mod4907 from "module_4907" /* 4907 */;
import shimStringTrim from "shimStringTrim" /* 4913 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4909 */;

let closure_2 = callBind(_mod4906());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4906;
obj.implementation = _mod4907;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;