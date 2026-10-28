// _runtime/metro/06429__.js
import callBoundIntrinsic from "../01338_callBoundIntrinsic.js";
import properlyBoxed from "../06430_properlyBoxed.js";
import _mod6432 from "06432__.js";
import RequireObjectCoercible from "../06434_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../06495_shimArrayPrototypeMap.js";
import callBind from "../01473_callBind.js";
import defineProperty from "06449__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod6432;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
