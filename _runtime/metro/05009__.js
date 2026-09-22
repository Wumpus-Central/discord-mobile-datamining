// === Module 5009: ? ===

// Module 5009
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5010 */;
import _mod5012 from "module_5012" /* 5012 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5014 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5075 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5029" /* 5029 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5012;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;