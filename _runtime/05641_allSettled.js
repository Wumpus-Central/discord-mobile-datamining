// === Module 5641: allSettled ===

// Module 5641 (allSettled)
import requirePromise from "requirePromise" /* 5642 */;
import _mod5643 from "module_5643" /* 5643 */;
import _mod5644 from "module_5644" /* 5644 */;
import shimAllSettled from "shimAllSettled" /* 5719 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_5671" /* 5671 */;

requirePromise();
let closure_0 = callBind(_mod5643());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5643;
obj.implementation = _mod5644;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;