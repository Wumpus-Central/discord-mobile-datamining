// _runtime/metro/06380__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../06381_properlyBoxed.js";
import _mod6383 from "06383__.js";
import RequireObjectCoercible from "../06385_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06446_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "06400__.js";

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
