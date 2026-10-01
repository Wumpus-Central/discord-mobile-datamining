// === Module 5303: trim ===

// Module 5303 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5292 */;
import _mod5304 from "module_5304" /* 5304 */;
import _mod5305 from "module_5305" /* 5305 */;
import shimStringTrim from "shimStringTrim" /* 5311 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5307" /* 5307 */;

let closure_2 = callBind(_mod5304());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5304;
obj.implementation = _mod5305;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;