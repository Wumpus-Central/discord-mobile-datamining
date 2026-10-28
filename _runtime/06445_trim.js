// === Module 6445: trim ===

// Module 6445 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6434 */;
import _mod6446 from "module_6446" /* 6446 */;
import _mod6447 from "module_6447" /* 6447 */;
import shimStringTrim from "shimStringTrim" /* 6453 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6449" /* 6449 */;

let closure_2 = callBind(_mod6446());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6446;
obj.implementation = _mod6447;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;