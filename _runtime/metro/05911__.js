// _runtime/metro/05911__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import properlyBoxed from "../05912_properlyBoxed.js";
import _mod5914 from "05914__.js";
import RequireObjectCoercible from "../05916_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05977_shimArrayPrototypeMap.js";
import callBind from "../01476_callBind.js";
import defineProperty from "05931__.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod5914;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
