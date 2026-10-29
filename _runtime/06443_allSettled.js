// _runtime/06443_allSettled.js
import requirePromise from "06444_requirePromise.js";
import _mod6445 from "metro/06445__.js";
import _mod6446 from "metro/06446__.js";
import shimAllSettled from "06521_shimAllSettled.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/06473__.js";

requirePromise();
let closure_0 = callBind(_mod6445());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6445;
obj.implementation = _mod6446;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
