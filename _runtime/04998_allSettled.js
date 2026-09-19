// _runtime/04998_allSettled.js
import requirePromise from "04999_requirePromise.js";
import _mod5000 from "metro/05000__.js";
import _mod5001 from "metro/05001__.js";
import shimAllSettled from "05076_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05028__.js";

requirePromise();
let closure_0 = callBind(_mod5000());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5000;
obj.implementation = _mod5001;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
