// === Module 6469: trim ===

// Module 6469 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6458 */;
import _mod6470 from "module_6470" /* 6470 */;
import _mod6471 from "module_6471" /* 6471 */;
import shimStringTrim from "shimStringTrim" /* 6477 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_6473" /* 6473 */;

let closure_2 = callBind(_mod6470());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6470;
obj.implementation = _mod6471;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;