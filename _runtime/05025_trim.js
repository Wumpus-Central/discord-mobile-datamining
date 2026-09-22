// === Module 5025: trim ===

// Module 5025 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5014 */;
import _mod5026 from "module_5026" /* 5026 */;
import _mod5027 from "module_5027" /* 5027 */;
import shimStringTrim from "shimStringTrim" /* 5033 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5029" /* 5029 */;

let closure_2 = callBind(_mod5026());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5026;
obj.implementation = _mod5027;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;