// === Module 6396: trim ===

// Module 6396 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6385 */;
import _mod6397 from "module_6397" /* 6397 */;
import _mod6398 from "module_6398" /* 6398 */;
import shimStringTrim from "shimStringTrim" /* 6404 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6400" /* 6400 */;

let closure_2 = callBind(_mod6397());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6397;
obj.implementation = _mod6398;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;