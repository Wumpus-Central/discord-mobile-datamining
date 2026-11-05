// === Module 6620: trim ===

// Module 6620 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6609 */;
import _mod6621 from "module_6621" /* 6621 */;
import _mod6622 from "module_6622" /* 6622 */;
import shimStringTrim from "shimStringTrim" /* 6628 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6624" /* 6624 */;

let closure_2 = callBind(_mod6621());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6621;
obj.implementation = _mod6622;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;