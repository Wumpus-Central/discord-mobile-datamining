// === Module 6576: allSettled ===

// Module 6576 (allSettled)
import requirePromise from "requirePromise" /* 6577 */;
import _mod6578 from "module_6578" /* 6578 */;
import _mod6579 from "module_6579" /* 6579 */;
import shimAllSettled from "shimAllSettled" /* 6654 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6606" /* 6606 */;

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