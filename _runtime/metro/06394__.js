// === Module 6394: ? ===

// Module 6394
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 6395 */;
import _mod6397 from "module_6397" /* 6397 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6399 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6460 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6414" /* 6414 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6397;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;