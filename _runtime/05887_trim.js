// === Module 5887: trim ===

// Module 5887 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5876 */;
import _mod5888 from "module_5888" /* 5888 */;
import _mod5889 from "module_5889" /* 5889 */;
import shimStringTrim from "shimStringTrim" /* 5895 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5891" /* 5891 */;

let closure_2 = callBind(_mod5888());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5888;
obj.implementation = _mod5889;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;