// _runtime/metro/06348__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../06349_properlyBoxed.js";
import _mod6351 from "06351__.js";
import RequireObjectCoercible from "../06353_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06414_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "06368__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6351;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
