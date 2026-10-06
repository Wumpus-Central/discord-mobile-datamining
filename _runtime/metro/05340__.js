// === Module 5340: ? ===

// Module 5340
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import getPolyfill from "getPolyfill" /* 5341 */;
import _mod5343 from "module_5343" /* 5343 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5345 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5406 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5360 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5343, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;