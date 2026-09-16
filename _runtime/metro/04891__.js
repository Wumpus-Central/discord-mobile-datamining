// _runtime/metro/04891__.js
import callBoundIntrinsic from "../01315_callBoundIntrinsic.js";
import properlyBoxed from "../04892_properlyBoxed.js";
import _mod4894 from "04894__.js";
import RequireObjectCoercible from "../04896_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../04957_shimArrayPrototypeMap.js";
import callBind from "../01455_callBind.js";
import defineProperty from "../04911_defineProperty.js";

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4894;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
