// === Module 6395: trim ===

// Module 6395 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6384 */;
import _mod6396 from "module_6396" /* 6396 */;
import _mod6397 from "module_6397" /* 6397 */;
import shimStringTrim from "shimStringTrim" /* 6403 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6399" /* 6399 */;

let closure_2 = callBind(_mod6396());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6396;
obj.implementation = _mod6397;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;