// _runtime/06576_allSettled.js
import requirePromise from "06577_requirePromise.js";
import _mod6578 from "metro/06578__.js";
import _mod6579 from "metro/06579__.js";
import shimAllSettled from "06654_shimAllSettled.js";
import callBind from "01470_callBind.js";
import defineProperty from "metro/06606__.js";

requirePromise();
let closure_0 = callBind(_mod6578());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6578;
obj.implementation = _mod6579;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
