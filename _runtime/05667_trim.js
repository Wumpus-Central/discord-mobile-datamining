// _runtime/05667_trim.js
import RequireObjectCoercible from "05656_RequireObjectCoercible.js";
import _mod5668 from "metro/05668__.js";
import _mod5669 from "metro/05669__.js";
import shimStringTrim from "05675_shimStringTrim.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/05671__.js";

let closure_2 = callBind(_mod5668());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5668;
obj.implementation = _mod5669;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
