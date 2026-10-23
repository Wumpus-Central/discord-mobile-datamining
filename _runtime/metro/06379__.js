// _runtime/metro/06379__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../06380_properlyBoxed.js";
import _mod6382 from "06382__.js";
import RequireObjectCoercible from "../06384_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06445_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "06399__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6382;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
