// === Module 6443: allSettled ===

// Module 6443 (allSettled)
import requirePromise from "requirePromise" /* 6444 */;
import _mod6445 from "module_6445" /* 6445 */;
import _mod6446 from "module_6446" /* 6446 */;
import shimAllSettled from "shimAllSettled" /* 6521 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_6473" /* 6473 */;

requirePromise();
let closure_0 = callBind(_mod6445());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6445;
obj.implementation = _mod6446;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;