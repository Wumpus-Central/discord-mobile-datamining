// === Module 6384: allSettled ===

// Module 6384 (allSettled)
import requirePromise from "requirePromise" /* 6385 */;
import _mod6386 from "module_6386" /* 6386 */;
import _mod6387 from "module_6387" /* 6387 */;
import shimAllSettled from "shimAllSettled" /* 6462 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6414" /* 6414 */;

requirePromise();
let closure_0 = callBind(_mod6386());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6386;
obj.implementation = _mod6387;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;