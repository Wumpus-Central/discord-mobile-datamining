// === Module 6392: ? ===

// Module 6392
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 6393 */;
import _mod6395 from "module_6395" /* 6395 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6397 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6458 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6412" /* 6412 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6395;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;