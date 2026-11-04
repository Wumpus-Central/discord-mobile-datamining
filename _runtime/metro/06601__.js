// === Module 6601: ? ===

// Module 6601
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import properlyBoxed from "properlyBoxed" /* 6602 */;
import _mod6604 from "module_6604" /* 6604 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6606 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6667 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6621" /* 6621 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6604;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;