// _runtime/metro/05333__.js
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import properlyBoxed from "../05334_properlyBoxed.js";
import _mod5336 from "05336__.js";
import RequireObjectCoercible from "../05338_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05399_shimArrayPrototypeMap.js";
import callBind from "../01461_callBind.js";
import defineProperty from "05353__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5336;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
