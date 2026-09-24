// _runtime/metro/05095__.js
import callBoundIntrinsic from "../01315_callBoundIntrinsic.js";
import properlyBoxed from "../05096_properlyBoxed.js";
import _mod5098 from "05098__.js";
import RequireObjectCoercible from "../05100_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05161_shimArrayPrototypeMap.js";
import callBind from "../01455_callBind.js";
import defineProperty from "05115__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5098;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
