// === Module 6602: trim ===

// Module 6602 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6591 */;
import _mod6603 from "module_6603" /* 6603 */;
import _mod6604 from "module_6604" /* 6604 */;
import shimStringTrim from "shimStringTrim" /* 6610 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6606" /* 6606 */;

let closure_2 = callBind(_mod6603());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6603;
obj.implementation = _mod6604;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;