// === Module 6364: trim ===

// Module 6364 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6353 */;
import _mod6365 from "module_6365" /* 6365 */;
import _mod6366 from "module_6366" /* 6366 */;
import shimStringTrim from "shimStringTrim" /* 6372 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6368" /* 6368 */;

let closure_2 = callBind(_mod6365());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6365;
obj.implementation = _mod6366;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;