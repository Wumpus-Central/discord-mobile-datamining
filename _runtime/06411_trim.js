// === Module 6411: trim ===

// Module 6411 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 6400 */;
import _mod6412 from "module_6412" /* 6412 */;
import _mod6413 from "module_6413" /* 6413 */;
import shimStringTrim from "shimStringTrim" /* 6419 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6415" /* 6415 */;

let closure_2 = callBind(_mod6412());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6412;
obj.implementation = _mod6413;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;