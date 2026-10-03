// === Module 5333: ? ===

// Module 5333
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import properlyBoxed from "properlyBoxed" /* 5334 */;
import _mod5336 from "module_5336" /* 5336 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5338 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5399 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5353" /* 5353 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5336;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;