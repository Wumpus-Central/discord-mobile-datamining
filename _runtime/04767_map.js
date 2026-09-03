// === Module 4767: map ===

// Module 4767 (map)
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;
import getPolyfill from "getPolyfill" /* 4768 */;
import map2 from "map" /* 4770 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4772 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4833 */;
import callBind from "callBind" /* 1417 */;
import defineProperty from "defineProperty" /* 4787 */;

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