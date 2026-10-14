// === Module 5650: allSettled ===

// Module 5650 (allSettled)
import requirePromise from "requirePromise" /* 5651 */;
import _mod5652 from "module_5652" /* 5652 */;
import _mod5653 from "module_5653" /* 5653 */;
import shimAllSettled from "shimAllSettled" /* 5728 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5680" /* 5680 */;

requirePromise();
let closure_0 = callBind(_mod5652());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5652;
obj.implementation = _mod5653;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;