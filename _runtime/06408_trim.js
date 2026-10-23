// _runtime/06408_trim.js
import RequireObjectCoercible from "06397_RequireObjectCoercible.js";
import _mod6409 from "metro/06409__.js";
import _mod6410 from "metro/06410__.js";
import shimStringTrim from "06416_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06412__.js";

let closure_2 = callBind(_mod6409());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6409;
obj.implementation = _mod6410;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
