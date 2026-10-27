// === Module 6385: allSettled ===

// Module 6385 (allSettled)
import requirePromise from "requirePromise" /* 6386 */;
import _mod6387 from "module_6387" /* 6387 */;
import _mod6388 from "module_6388" /* 6388 */;
import shimAllSettled from "shimAllSettled" /* 6463 */;
import callBind from "callBind" /* 1473 */;
import defineProperty from "module_6415" /* 6415 */;

requirePromise();
let closure_0 = callBind(_mod6387());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6387;
obj.implementation = _mod6388;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;