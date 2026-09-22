// _runtime/04999_allSettled.js
import requirePromise from "05000_requirePromise.js";
import _mod5001 from "metro/05001__.js";
import _mod5002 from "metro/05002__.js";
import shimAllSettled from "05077_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05029__.js";

requirePromise();
let closure_0 = callBind(_mod5001());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5001;
obj.implementation = _mod5002;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
