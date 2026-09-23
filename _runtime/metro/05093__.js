// === Module 5093: ? ===

// Module 5093
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5094 */;
import _mod5096 from "module_5096" /* 5096 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5098 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5159 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5113" /* 5113 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5096;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;