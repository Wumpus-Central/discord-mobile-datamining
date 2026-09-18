// === Module 4975: ? ===

// Module 4975
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 4976 */;
import _mod4978 from "module_4978" /* 4978 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4980 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5041 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_4995" /* 4995 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4978;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;