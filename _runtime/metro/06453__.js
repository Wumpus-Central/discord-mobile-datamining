// _runtime/metro/06453__.js
import callBoundIntrinsic from "../01338_callBoundIntrinsic.js";
import properlyBoxed from "../06454_properlyBoxed.js";
import _mod6456 from "06456__.js";
import RequireObjectCoercible from "../06458_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06519_shimArrayPrototypeMap.js";
import callBind from "../01474_callBind.js";
import defineProperty from "06473__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6456;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
