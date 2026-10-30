// _runtime/metro/06460__.js
import callBoundIntrinsic from "../01327_callBoundIntrinsic.js";
import properlyBoxed from "../06461_properlyBoxed.js";
import _mod6463 from "06463__.js";
import RequireObjectCoercible from "../06465_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06526_shimArrayPrototypeMap.js";
import callBind from "../01469_callBind.js";
import defineProperty from "06480__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6463;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
