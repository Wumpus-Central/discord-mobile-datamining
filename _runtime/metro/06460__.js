// === Module 6460: ? ===

// Module 6460
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import properlyBoxed from "properlyBoxed" /* 6461 */;
import _mod6463 from "module_6463" /* 6463 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6465 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6526 */;
import callBind from "callBind" /* 1469 */;
import defineProperty from "module_6480" /* 6480 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6463;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;