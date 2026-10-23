// === Module 6369: allSettled ===

// Module 6369 (allSettled)
import requirePromise from "requirePromise" /* 6370 */;
import _mod6371 from "module_6371" /* 6371 */;
import _mod6372 from "module_6372" /* 6372 */;
import shimAllSettled from "shimAllSettled" /* 6447 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6399" /* 6399 */;

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