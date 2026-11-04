// _runtime/06591_allSettled.js
import requirePromise from "06592_requirePromise.js";
import _mod6593 from "metro/06593__.js";
import _mod6594 from "metro/06594__.js";
import shimAllSettled from "06669_shimAllSettled.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06621__.js";

requirePromise();
let closure_0 = callBind(_mod6593());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6593;
obj.implementation = _mod6594;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
