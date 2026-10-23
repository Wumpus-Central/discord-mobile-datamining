// _runtime/06369_allSettled.js
import requirePromise from "06370_requirePromise.js";
import _mod6371 from "metro/06371__.js";
import _mod6372 from "metro/06372__.js";
import shimAllSettled from "06447_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06399__.js";

requirePromise();
let closure_0 = callBind(_mod6371());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6371;
obj.implementation = _mod6372;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
