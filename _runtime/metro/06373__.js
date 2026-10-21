// === Module 6373: ? ===

// Module 6373
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 6374 */;
import _mod6376 from "module_6376" /* 6376 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6378 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6439 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6393" /* 6393 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6376;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;