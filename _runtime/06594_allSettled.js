// === Module 6594: allSettled ===

// Module 6594 (allSettled)
import requirePromise from "requirePromise" /* 6595 */;
import _mod6596 from "module_6596" /* 6596 */;
import _mod6597 from "module_6597" /* 6597 */;
import shimAllSettled from "shimAllSettled" /* 6672 */;
import callBind from "callBind" /* 1470 */;
import defineProperty from "module_6624" /* 6624 */;

requirePromise();
let closure_0 = callBind(_mod6596());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6596;
obj.implementation = _mod6597;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;