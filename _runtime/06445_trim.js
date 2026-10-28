// _runtime/06445_trim.js
import RequireObjectCoercible from "06434_RequireObjectCoercible.js";
import _mod6446 from "metro/06446__.js";
import _mod6447 from "metro/06447__.js";
import shimStringTrim from "06453_shimStringTrim.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/06449__.js";

let closure_2 = callBind(_mod6446());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6446;
obj.implementation = _mod6447;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
