// === Module 4843: trim ===

// Module 4843 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4832 */;
import _mod4844 from "module_4844" /* 4844 */;
import _mod4845 from "module_4845" /* 4845 */;
import shimStringTrim from "shimStringTrim" /* 4851 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4847 */;

let closure_2 = callBind(_mod4844());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4844;
obj.implementation = _mod4845;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;