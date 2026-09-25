// === Module 5096: ? ===

// Module 5096
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5097 */;
import _mod5099 from "module_5099" /* 5099 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5101 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5162 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5116" /* 5116 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5099;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;