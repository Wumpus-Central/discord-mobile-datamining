// === Module 5340: ? ===

// Module 5340
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import properlyBoxed from "properlyBoxed" /* 5341 */;
import _mod5343 from "module_5343" /* 5343 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5345 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5406 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5360" /* 5360 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5343;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;