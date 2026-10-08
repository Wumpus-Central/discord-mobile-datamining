// _runtime/metro/05651__.js
import callBoundIntrinsic from "../01338_callBoundIntrinsic.js";
import properlyBoxed from "../05652_properlyBoxed.js";
import _mod5654 from "05654__.js";
import RequireObjectCoercible from "../05656_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05717_shimArrayPrototypeMap.js";
import callBind from "../01473_callBind.js";
import defineProperty from "05671__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5654;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
