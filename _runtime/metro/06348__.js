// === Module 6348: ? ===

// Module 6348
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 6349 */;
import _mod6351 from "module_6351" /* 6351 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6353 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6414 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6368" /* 6368 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6351;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;