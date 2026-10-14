// _runtime/metro/05660__.js
import callBoundIntrinsic from "../01339_callBoundIntrinsic.js";
import properlyBoxed from "../05661_properlyBoxed.js";
import _mod5663 from "05663__.js";
import RequireObjectCoercible from "../05665_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05726_shimArrayPrototypeMap.js";
import callBind from "../01474_callBind.js";
import defineProperty from "05680__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5663;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
