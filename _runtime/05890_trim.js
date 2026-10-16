// _runtime/05890_trim.js
import RequireObjectCoercible from "05879_RequireObjectCoercible.js";
import _mod5891 from "metro/05891__.js";
import _mod5892 from "metro/05892__.js";
import shimStringTrim from "05898_shimStringTrim.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05894__.js";

let closure_2 = callBind(_mod5891());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5891;
obj.implementation = _mod5892;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
