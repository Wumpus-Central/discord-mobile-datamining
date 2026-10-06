// _runtime/metro/05340__.js
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import getPolyfill from "../05341_getPolyfill.js";
import _mod5343 from "05343__.js";
import RequireObjectCoercible from "../05345_RequireObjectCoercible.js";
import shimArrayPrototypeMap from "../05406_shimArrayPrototypeMap.js";
import callBind from "../01461_callBind.js";
import defineProperties from "../05360_defineProperties.js";

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill, implementation: _mod5343, shim: shimArrayPrototypeMap };
defineProperties(map, obj);

export default map;
