// === Module 6450: allSettled ===

// Module 6450 (allSettled)
import requirePromise from "requirePromise" /* 6451 */;
import _mod6452 from "module_6452" /* 6452 */;
import _mod6453 from "module_6453" /* 6453 */;
import shimAllSettled from "shimAllSettled" /* 6528 */;
import callBind from "callBind" /* 1469 */;
import defineProperty from "module_6480" /* 6480 */;

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