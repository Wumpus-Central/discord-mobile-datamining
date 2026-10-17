// === Module 5901: allSettled ===

// Module 5901 (allSettled)
import requirePromise from "requirePromise" /* 5902 */;
import _mod5903 from "module_5903" /* 5903 */;
import _mod5904 from "module_5904" /* 5904 */;
import shimAllSettled from "shimAllSettled" /* 5979 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5931" /* 5931 */;

requirePromise();
let closure_0 = callBind(_mod5903());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5903;
obj.implementation = _mod5904;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;