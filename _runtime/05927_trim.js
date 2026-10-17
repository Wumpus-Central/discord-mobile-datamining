// === Module 5927: trim ===

// Module 5927 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5916 */;
import _mod5928 from "module_5928" /* 5928 */;
import _mod5929 from "module_5929" /* 5929 */;
import shimStringTrim from "shimStringTrim" /* 5935 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5931" /* 5931 */;

let closure_2 = callBind(_mod5928());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5928;
obj.implementation = _mod5929;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;