// === Module 6367: trim ===

// Module 6367 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6356 */;
import _mod6368 from "module_6368" /* 6368 */;
import _mod6369 from "module_6369" /* 6369 */;
import shimStringTrim from "shimStringTrim" /* 6375 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6371" /* 6371 */;

let closure_2 = callBind(_mod6368());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6368;
obj.implementation = _mod6369;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;