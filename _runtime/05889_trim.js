// === Module 5889: trim ===

// Module 5889 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 5878 */;
import _mod5890 from "module_5890" /* 5890 */;
import _mod5891 from "module_5891" /* 5891 */;
import shimStringTrim from "shimStringTrim" /* 5897 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5893" /* 5893 */;

let closure_2 = callBind(_mod5890());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5890;
obj.implementation = _mod5891;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;