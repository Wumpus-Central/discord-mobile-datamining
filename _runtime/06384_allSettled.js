// _runtime/06384_allSettled.js
import requirePromise from "06385_requirePromise.js";
import _mod6386 from "metro/06386__.js";
import _mod6387 from "metro/06387__.js";
import shimAllSettled from "06462_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06414__.js";

requirePromise();
let closure_0 = callBind(_mod6386());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6386;
obj.implementation = _mod6387;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
