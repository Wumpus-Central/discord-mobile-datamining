// _runtime/05303_trim.js
import RequireObjectCoercible from "05292_RequireObjectCoercible.js";
import _mod5304 from "metro/05304__.js";
import _mod5305 from "metro/05305__.js";
import shimStringTrim from "05311_shimStringTrim.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05307__.js";

let closure_2 = callBind(_mod5304());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5304;
obj.implementation = _mod5305;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
