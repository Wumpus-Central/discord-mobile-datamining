// _runtime/06389_trim.js
import RequireObjectCoercible from "06378_RequireObjectCoercible.js";
import _mod6390 from "metro/06390__.js";
import _mod6391 from "metro/06391__.js";
import shimStringTrim from "06397_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06393__.js";

let closure_2 = callBind(_mod6390());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6390;
obj.implementation = _mod6391;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
