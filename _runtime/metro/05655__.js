// === Module 5655: ? ===

// Module 5655
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import properlyBoxed from "properlyBoxed" /* 5656 */;
import _mod5658 from "module_5658" /* 5658 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5660 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5721 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5675" /* 5675 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5658;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;