// === Module 5289: allSettled ===

// Module 5289 (allSettled)
import requirePromise from "requirePromise" /* 5290 */;
import _mod5291 from "module_5291" /* 5291 */;
import _mod5292 from "module_5292" /* 5292 */;
import shimAllSettled from "shimAllSettled" /* 5367 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5319" /* 5319 */;

requirePromise();
let closure_0 = callBind(_mod5291());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5291;
obj.implementation = _mod5292;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;