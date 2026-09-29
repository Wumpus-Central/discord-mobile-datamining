// === Module 5285: trim ===

// Module 5285 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5274 */;
import _mod5286 from "module_5286" /* 5286 */;
import _mod5287 from "module_5287" /* 5287 */;
import shimStringTrim from "shimStringTrim" /* 5293 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5289" /* 5289 */;

let closure_2 = callBind(_mod5286());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5286;
obj.implementation = _mod5287;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;