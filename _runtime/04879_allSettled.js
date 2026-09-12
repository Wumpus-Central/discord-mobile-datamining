// === Module 4879: allSettled ===

// Module 4879 (allSettled)
import requirePromise from "requirePromise" /* 4880 */;
import _mod4881 from "module_4881" /* 4881 */;
import _mod4882 from "module_4882" /* 4882 */;
import shimAllSettled from "shimAllSettled" /* 4957 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4909 */;

requirePromise();
let closure_0 = callBind(_mod4881());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4881;
obj.implementation = _mod4882;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;