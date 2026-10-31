// === Module 6456: allSettled ===

// Module 6456 (allSettled)
import requirePromise from "requirePromise" /* 6457 */;
import _mod6458 from "module_6458" /* 6458 */;
import _mod6459 from "module_6459" /* 6459 */;
import shimAllSettled from "shimAllSettled" /* 6534 */;
import callBind from "callBind" /* 1468 */;
import defineProperty from "module_6486" /* 6486 */;

requirePromise();
let closure_0 = callBind(_mod6458());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6458;
obj.implementation = _mod6459;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;