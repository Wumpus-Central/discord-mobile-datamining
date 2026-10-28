// === Module 6429: ? ===

// Module 6429
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import properlyBoxed from "properlyBoxed" /* 6430 */;
import _mod6432 from "module_6432" /* 6432 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6434 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6495 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6449" /* 6449 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6432;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;