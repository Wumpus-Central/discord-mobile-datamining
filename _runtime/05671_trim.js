// === Module 5671: trim ===

// Module 5671 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5660 */;
import _mod5672 from "module_5672" /* 5672 */;
import _mod5673 from "module_5673" /* 5673 */;
import shimStringTrim from "shimStringTrim" /* 5679 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5675" /* 5675 */;

let closure_2 = callBind(_mod5672());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5672;
obj.implementation = _mod5673;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;