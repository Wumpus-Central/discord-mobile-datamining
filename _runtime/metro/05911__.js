// === Module 5911: ? ===

// Module 5911
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 5912 */;
import _mod5914 from "module_5914" /* 5914 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5916 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5977 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5931" /* 5931 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5914;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;