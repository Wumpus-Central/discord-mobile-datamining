// _runtime/metro/04827__.js
import callBoundIntrinsic from "../01316_callBoundIntrinsic.js";
import properlyBoxed from "../04828_properlyBoxed.js";
import _mod4830 from "04830__.js";
import RequireObjectCoercible from "../04832_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../04893_shimArrayPrototypeMap.js";
import callBind from "../01454_callBind.js";
import defineProperty from "../04847_defineProperty.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4830;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
