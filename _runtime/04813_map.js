// _runtime/04813_map.js
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";
import getPolyfill from "04814_getPolyfill.js";
import map2 from "04816_map.js";
import RequireObjectCoercible from "04818_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "04879_shimArrayPrototypeMap.js";
import callBind from "01454_callBind.js";
import defineProperty from "04833_defineProperty.js";

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
