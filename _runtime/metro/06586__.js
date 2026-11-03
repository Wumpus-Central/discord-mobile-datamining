// === Module 6586: ? ===

// Module 6586
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import properlyBoxed from "properlyBoxed" /* 6587 */;
import _mod6589 from "module_6589" /* 6589 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6591 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 6652 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6606" /* 6606 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6589;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;