// === Module 4859: ? ===

// Module 4859
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import properlyBoxed from "properlyBoxed" /* 4860 */;
import _mod4862 from "module_4862" /* 4862 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4864 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4925 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4879 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4862;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;