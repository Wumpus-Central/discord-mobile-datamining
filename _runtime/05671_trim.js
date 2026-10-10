// _runtime/05671_trim.js
import RequireObjectCoercible from "05660_RequireObjectCoercible.js";
import _mod5672 from "metro/05672__.js";
import _mod5673 from "metro/05673__.js";
import shimStringTrim from "05679_shimStringTrim.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05675__.js";

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
