// === Module 5660: ? ===

// Module 5660
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import properlyBoxed from "properlyBoxed" /* 5661 */;
import _mod5663 from "module_5663" /* 5663 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5665 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5726 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5680" /* 5680 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5663;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;