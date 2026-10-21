// === Module 6363: allSettled ===

// Module 6363 (allSettled)
import requirePromise from "requirePromise" /* 6364 */;
import _mod6365 from "module_6365" /* 6365 */;
import _mod6366 from "module_6366" /* 6366 */;
import shimAllSettled from "shimAllSettled" /* 6441 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6393" /* 6393 */;

requirePromise();
let closure_0 = callBind(_mod6365());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6365;
obj.implementation = _mod6366;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;