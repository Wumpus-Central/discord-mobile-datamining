// === Module 5330: allSettled ===

// Module 5330 (allSettled)
import requirePromise from "requirePromise" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import shimAllSettled from "shimAllSettled" /* 5408 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5360" /* 5360 */;

requirePromise();
let closure_0 = callBind(_mod5332());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5332;
obj.implementation = _mod5333;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;