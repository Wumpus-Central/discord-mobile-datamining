// === Module 6591: allSettled ===

// Module 6591 (allSettled)
import requirePromise from "requirePromise" /* 6592 */;
import _mod6593 from "module_6593" /* 6593 */;
import _mod6594 from "module_6594" /* 6594 */;
import shimAllSettled from "shimAllSettled" /* 6669 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6621" /* 6621 */;

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