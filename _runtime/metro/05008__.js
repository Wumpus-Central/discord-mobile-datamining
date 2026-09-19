// === Module 5008: ? ===

// Module 5008
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 5009 */;
import _mod5011 from "module_5011" /* 5011 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5013 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5074 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5028" /* 5028 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5011;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;