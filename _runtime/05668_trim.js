// _runtime/05668_trim.js
import RequireObjectCoercible from "05657_RequireObjectCoercible.js";
import _mod5669 from "metro/05669__.js";
import _mod5670 from "metro/05670__.js";
import shimStringTrim from "05676_shimStringTrim.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05672__.js";

let closure_2 = callBind(_mod5669());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5669;
obj.implementation = _mod5670;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
