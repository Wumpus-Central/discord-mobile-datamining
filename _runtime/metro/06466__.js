// === Module 6466: ? ===

// Module 6466
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import properlyBoxed from "properlyBoxed" /* 6467 */;
import _mod6469 from "module_6469" /* 6469 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6471 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6532 */;
import callBind from "callBind" /* 1468 */;
import defineProperty from "module_6486" /* 6486 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6469;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;