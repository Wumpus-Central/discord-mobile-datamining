// === Module 5871: ? ===

// Module 5871
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import properlyBoxed from "properlyBoxed" /* 5872 */;
import _mod5874 from "module_5874" /* 5874 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5876 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5937 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5891" /* 5891 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5874;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;