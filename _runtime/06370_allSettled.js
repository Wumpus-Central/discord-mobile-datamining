// === Module 6370: allSettled ===

// Module 6370 (allSettled)
import requirePromise from "requirePromise" /* 6371 */;
import _mod6372 from "module_6372" /* 6372 */;
import _mod6373 from "module_6373" /* 6373 */;
import shimAllSettled from "shimAllSettled" /* 6448 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6400" /* 6400 */;

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