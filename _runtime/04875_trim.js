// === Module 4875: trim ===

// Module 4875 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4864 */;
import _mod4876 from "module_4876" /* 4876 */;
import _mod4877 from "module_4877" /* 4877 */;
import shimStringTrim from "shimStringTrim" /* 4883 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4879 */;

let closure_2 = callBind(_mod4876());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4876;
obj.implementation = _mod4877;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;