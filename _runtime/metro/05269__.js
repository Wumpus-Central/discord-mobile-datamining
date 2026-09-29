// === Module 5269: ? ===

// Module 5269
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5270 */;
import _mod5272 from "module_5272" /* 5272 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5274 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5335 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5289" /* 5289 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5272;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;