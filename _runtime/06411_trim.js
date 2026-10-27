// _runtime/06411_trim.js
import RequireObjectCoercible from "06400_RequireObjectCoercible.js";
import _mod6412 from "metro/06412__.js";
import _mod6413 from "metro/06413__.js";
import shimStringTrim from "06419_shimStringTrim.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/06415__.js";

let closure_2 = callBind(_mod6412());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6412;
obj.implementation = _mod6413;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
