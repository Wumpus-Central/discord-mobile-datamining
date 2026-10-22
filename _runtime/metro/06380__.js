// === Module 6380: ? ===

// Module 6380
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import properlyBoxed from "properlyBoxed" /* 6381 */;
import _mod6383 from "module_6383" /* 6383 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6385 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6446 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6400" /* 6400 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6383;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;