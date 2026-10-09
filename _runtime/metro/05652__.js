// === Module 5652: ? ===

// Module 5652
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import properlyBoxed from "properlyBoxed" /* 5653 */;
import _mod5655 from "module_5655" /* 5655 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5657 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5718 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5672" /* 5672 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5655;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;