// === Module 6453: ? ===

// Module 6453
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import properlyBoxed from "properlyBoxed" /* 6454 */;
import _mod6456 from "module_6456" /* 6456 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6458 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6519 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_6473" /* 6473 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6456;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;