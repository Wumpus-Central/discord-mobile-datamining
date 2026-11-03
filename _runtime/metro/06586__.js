// _runtime/metro/06586__.js
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import properlyBoxed from "../06587_properlyBoxed.js";
import _mod6589 from "06589__.js";
import RequireObjectCoercible from "../06591_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06652_shimArrayPrototypeMap.js";
import callBind from "../01470_callBind.js";
import defineProperty from "06606__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6589;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
