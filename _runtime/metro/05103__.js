// === Module 5103: ? ===

// Module 5103
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5104 */;
import _mod5106 from "module_5106" /* 5106 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5108 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5169 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5123" /* 5123 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5106;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;