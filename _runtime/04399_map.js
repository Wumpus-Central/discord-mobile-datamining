// _runtime/04399_map.js
import callBoundIntrinsic from "00574_callBoundIntrinsic.js";
import getPolyfill from "04400_getPolyfill.js";
import map2 from "04402_map.js";
import RequireObjectCoercible from "04404_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "04465_shimArrayPrototypeMap.js";
import callBind from "01422_callBind.js";
import defineProperty from "04419_defineProperty.js";

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