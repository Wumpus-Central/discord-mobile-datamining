// === Module 5874: ? ===

// Module 5874
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 5875 */;
import _mod5877 from "module_5877" /* 5877 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5879 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5940 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5894" /* 5894 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5877;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;