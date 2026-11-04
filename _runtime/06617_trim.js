// === Module 6617: trim ===

// Module 6617 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6606 */;
import _mod6618 from "module_6618" /* 6618 */;
import _mod6619 from "module_6619" /* 6619 */;
import shimStringTrim from "shimStringTrim" /* 6625 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6621" /* 6621 */;

let closure_2 = callBind(_mod6618());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6618;
obj.implementation = _mod6619;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;