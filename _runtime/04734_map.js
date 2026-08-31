// === Module 4734: map ===

// Module 4734 (map)
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;
import getPolyfill from "getPolyfill" /* 4735 */;
import map2 from "map" /* 4737 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4739 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4800 */;
import callBind from "callBind" /* 1418 */;
import defineProperty from "defineProperty" /* 4754 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = map2;
obj[2] = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;