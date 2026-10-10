// === Module 5645: allSettled ===

// Module 5645 (allSettled)
import requirePromise from "requirePromise" /* 5646 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5648 from "module_5648" /* 5648 */;
import shimAllSettled from "shimAllSettled" /* 5723 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5675" /* 5675 */;

requirePromise();
let closure_0 = callBind(_mod5647());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5647;
obj.implementation = _mod5648;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;