// === Module 5299: ? ===

// Module 5299
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5300 */;
import _mod5302 from "module_5302" /* 5302 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5304 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5365 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5319" /* 5319 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5302;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;