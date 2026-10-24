// === Module 6410: trim ===

// Module 6410 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6399 */;
import _mod6411 from "module_6411" /* 6411 */;
import _mod6412 from "module_6412" /* 6412 */;
import shimStringTrim from "shimStringTrim" /* 6418 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6414" /* 6414 */;

let closure_2 = callBind(_mod6411());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6411;
obj.implementation = _mod6412;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;