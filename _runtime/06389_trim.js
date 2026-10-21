// === Module 6389: trim ===

// Module 6389 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6378 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6391 from "module_6391" /* 6391 */;
import shimStringTrim from "shimStringTrim" /* 6397 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6393" /* 6393 */;

let closure_2 = callBind(_mod6390());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6390;
obj.implementation = _mod6391;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;