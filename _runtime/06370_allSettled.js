// _runtime/06370_allSettled.js
import requirePromise from "06371_requirePromise.js";
import _mod6372 from "metro/06372__.js";
import _mod6373 from "metro/06373__.js";
import shimAllSettled from "06448_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06400__.js";

requirePromise();
let closure_0 = callBind(_mod6372());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6372;
obj.implementation = _mod6373;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
