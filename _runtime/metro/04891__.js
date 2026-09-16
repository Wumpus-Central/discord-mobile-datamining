// === Module 4891: ? ===

// Module 4891
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import properlyBoxed from "properlyBoxed" /* 4892 */;
import _mod4894 from "module_4894" /* 4894 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4896 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4957 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4911 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4894;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;