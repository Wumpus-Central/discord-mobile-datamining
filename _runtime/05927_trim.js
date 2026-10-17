// _runtime/05927_trim.js
import RequireObjectCoercible from "05916_RequireObjectCoercible.js";
import _mod5928 from "metro/05928__.js";
import _mod5929 from "metro/05929__.js";
import shimStringTrim from "05935_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05931__.js";

let closure_2 = callBind(_mod5928());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5928;
obj.implementation = _mod5929;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
