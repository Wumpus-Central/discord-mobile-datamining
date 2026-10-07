// === Module 5356: trim ===

// Module 5356 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5345 */;
import _mod5357 from "module_5357" /* 5357 */;
import _mod5358 from "module_5358" /* 5358 */;
import shimStringTrim from "shimStringTrim" /* 5364 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5360" /* 5360 */;

let closure_2 = callBind(_mod5357());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5357;
obj.implementation = _mod5358;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;