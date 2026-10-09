// === Module 5642: allSettled ===

// Module 5642 (allSettled)
import requirePromise from "requirePromise" /* 5643 */;
import _mod5644 from "module_5644" /* 5644 */;
import _mod5645 from "module_5645" /* 5645 */;
import shimAllSettled from "shimAllSettled" /* 5720 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5672" /* 5672 */;

requirePromise();
let closure_0 = callBind(_mod5644());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5644;
obj.implementation = _mod5645;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;