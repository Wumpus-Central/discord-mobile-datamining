// === Module 5277: allSettled ===

// Module 5277 (allSettled)
import requirePromise from "requirePromise" /* 5278 */;
import _mod5279 from "module_5279" /* 5279 */;
import _mod5280 from "module_5280" /* 5280 */;
import shimAllSettled from "shimAllSettled" /* 5355 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5307" /* 5307 */;

requirePromise();
let closure_0 = callBind(_mod5279());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5279;
obj.implementation = _mod5280;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;