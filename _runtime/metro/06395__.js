// === Module 6395: ? ===

// Module 6395
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import properlyBoxed from "properlyBoxed" /* 6396 */;
import _mod6398 from "module_6398" /* 6398 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6400 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6461 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6415" /* 6415 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6398;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;