// === Module 5095: ? ===

// Module 5095
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5096 */;
import _mod5098 from "module_5098" /* 5098 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5100 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5161 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5115" /* 5115 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5098;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;