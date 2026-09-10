// === Module 4874: trim ===

// Module 4874 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4863 */;
import _mod4875 from "module_4875" /* 4875 */;
import _mod4876 from "module_4876" /* 4876 */;
import shimStringTrim from "shimStringTrim" /* 4882 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4878 */;

let closure_2 = callBind(_mod4875());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4875;
obj.implementation = _mod4876;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;