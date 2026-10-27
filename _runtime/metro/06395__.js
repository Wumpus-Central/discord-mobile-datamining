// _runtime/metro/06395__.js
import callBoundIntrinsic from "../01338_callBoundIntrinsic.js";
import properlyBoxed from "../06396_properlyBoxed.js";
import _mod6398 from "06398__.js";
import RequireObjectCoercible from "../06400_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06461_shimArrayPrototypeMap.js";
import callBind from "../01473_callBind.js";
import defineProperty from "06415__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6398;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
