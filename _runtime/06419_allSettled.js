// === Module 6419: allSettled ===

// Module 6419 (allSettled)
import requirePromise from "requirePromise" /* 6420 */;
import _mod6421 from "module_6421" /* 6421 */;
import _mod6422 from "module_6422" /* 6422 */;
import shimAllSettled from "shimAllSettled" /* 6497 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6449" /* 6449 */;

requirePromise();
let closure_0 = callBind(_mod6421());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6421;
obj.implementation = _mod6422;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;