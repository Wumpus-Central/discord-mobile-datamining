// === Module 4893: ? ===

// Module 4893
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 4894 */;
import _mod4896 from "module_4896" /* 4896 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4898 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4959 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4913 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4896;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;