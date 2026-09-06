// === Module 4803: allSettled ===

// Module 4803 (allSettled)
import requirePromise from "requirePromise" /* 4804 */;
import _mod4805 from "module_4805" /* 4805 */;
import _mod4806 from "module_4806" /* 4806 */;
import shimAllSettled from "shimAllSettled" /* 4881 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4833 */;

requirePromise();
let closure_0 = callBind(_mod4805());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4805;
obj.implementation = _mod4806;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;