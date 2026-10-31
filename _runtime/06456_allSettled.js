// _runtime/06456_allSettled.js
import requirePromise from "06457_requirePromise.js";
import _mod6458 from "metro/06458__.js";
import _mod6459 from "metro/06459__.js";
import shimAllSettled from "06534_shimAllSettled.js";
import callBind from "01468_callBind.js";
import defineProperty from "metro/06486__.js";

requirePromise();
let closure_0 = callBind(_mod6458());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6458;
obj.implementation = _mod6459;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
