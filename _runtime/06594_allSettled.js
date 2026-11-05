// _runtime/06594_allSettled.js
import requirePromise from "06595_requirePromise.js";
import _mod6596 from "metro/06596__.js";
import _mod6597 from "metro/06597__.js";
import shimAllSettled from "06672_shimAllSettled.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06624__.js";

requirePromise();
let closure_0 = callBind(_mod6596());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6596;
obj.implementation = _mod6597;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
