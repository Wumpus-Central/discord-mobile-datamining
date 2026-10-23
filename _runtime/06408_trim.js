// === Module 6408: trim ===

// Module 6408 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6397 */;
import _mod6409 from "module_6409" /* 6409 */;
import _mod6410 from "module_6410" /* 6410 */;
import shimStringTrim from "shimStringTrim" /* 6416 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6412" /* 6412 */;

let closure_2 = callBind(_mod6409());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6409;
obj.implementation = _mod6410;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;