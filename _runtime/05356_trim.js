// _runtime/05356_trim.js
import RequireObjectCoercible from "05345_RequireObjectCoercible.js";
import _mod5357 from "metro/05357__.js";
import _mod5358 from "metro/05358__.js";
import shimStringTrim from "05364_shimStringTrim.js";
import callBind from "01461_callBind.js";
import defineProperty from "metro/05360__.js";

let closure_2 = callBind(_mod5357());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5357;
obj.implementation = _mod5358;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
