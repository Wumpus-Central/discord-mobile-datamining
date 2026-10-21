// _runtime/metro/06373__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../06374_properlyBoxed.js";
import _mod6376 from "06376__.js";
import RequireObjectCoercible from "../06378_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06439_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "06393__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6376;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
