// _runtime/05119_trim.js
import RequireObjectCoercible from "05108_RequireObjectCoercible.js";
import _mod5120 from "metro/05120__.js";
import _mod5121 from "metro/05121__.js";
import shimStringTrim from "05127_shimStringTrim.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05123__.js";

let closure_2 = callBind(_mod5120());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5120;
obj.implementation = _mod5121;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
