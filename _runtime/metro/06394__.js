// _runtime/metro/06394__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../06395_properlyBoxed.js";
import _mod6397 from "06397__.js";
import RequireObjectCoercible from "../06399_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06460_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "06414__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6397;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
