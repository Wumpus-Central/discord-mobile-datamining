// === Module 6482: trim ===

// Module 6482 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6471 */;
import _mod6483 from "module_6483" /* 6483 */;
import _mod6484 from "module_6484" /* 6484 */;
import shimStringTrim from "shimStringTrim" /* 6490 */;
import callBind from "callBind" /* 1468 */;
import defineProperty from "module_6486" /* 6486 */;

let closure_2 = callBind(_mod6483());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6483;
obj.implementation = _mod6484;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;