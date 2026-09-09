// === Module 4827: ? ===

// Module 4827
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import properlyBoxed from "properlyBoxed" /* 4828 */;
import _mod4830 from "module_4830" /* 4830 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4832 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4893 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4847 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4830;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;