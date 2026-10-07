// _runtime/metro/05340__.js
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import properlyBoxed from "../05341_properlyBoxed.js";
import _mod5343 from "05343__.js";
import RequireObjectCoercible from "../05345_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05406_shimArrayPrototypeMap.js";
import callBind from "../01461_callBind.js";
import defineProperty from "05360__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5343;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
