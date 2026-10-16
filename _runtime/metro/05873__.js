// === Module 5873: ? ===

// Module 5873
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 5874 */;
import _mod5876 from "module_5876" /* 5876 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5878 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 5939 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5893" /* 5893 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5876;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;