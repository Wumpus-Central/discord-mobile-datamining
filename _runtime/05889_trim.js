// _runtime/05889_trim.js
import RequireObjectCoercible from "05878_RequireObjectCoercible.js";
import _mod5890 from "metro/05890__.js";
import _mod5891 from "metro/05891__.js";
import shimStringTrim from "05897_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05893__.js";

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
