// === Module 6338: allSettled ===

// Module 6338 (allSettled)
import requirePromise from "requirePromise" /* 6339 */;
import _mod6340 from "module_6340" /* 6340 */;
import _mod6341 from "module_6341" /* 6341 */;
import shimAllSettled from "shimAllSettled" /* 6416 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6368" /* 6368 */;

requirePromise();
let closure_0 = callBind(_mod6340());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6340;
obj.implementation = _mod6341;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;