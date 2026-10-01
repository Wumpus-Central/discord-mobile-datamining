// === Module 5287: ? ===

// Module 5287
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5288 */;
import _mod5290 from "module_5290" /* 5290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5292 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5353 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5307" /* 5307 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5290;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;