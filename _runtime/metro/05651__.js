// === Module 5651: ? ===

// Module 5651
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import properlyBoxed from "properlyBoxed" /* 5652 */;
import _mod5654 from "module_5654" /* 5654 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5656 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5717 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_5671" /* 5671 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5654;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;