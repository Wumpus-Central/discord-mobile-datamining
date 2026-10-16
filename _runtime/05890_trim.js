// === Module 5890: trim ===

// Module 5890 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5879 */;
import _mod5891 from "module_5891" /* 5891 */;
import _mod5892 from "module_5892" /* 5892 */;
import shimStringTrim from "shimStringTrim" /* 5898 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5894" /* 5894 */;

let closure_2 = callBind(_mod5891());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5891;
obj.implementation = _mod5892;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;