// _runtime/06450_allSettled.js
import requirePromise from "06451_requirePromise.js";
import _mod6452 from "metro/06452__.js";
import _mod6453 from "metro/06453__.js";
import shimAllSettled from "06528_shimAllSettled.js";
import callBind from "01469_callBind.js";
import defineProperty from "metro/06480__.js";

requirePromise();
let closure_0 = callBind(_mod6452());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6452;
obj.implementation = _mod6453;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
