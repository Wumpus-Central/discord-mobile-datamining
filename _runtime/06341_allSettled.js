// === Module 6341: allSettled ===

// Module 6341 (allSettled)
import requirePromise from "requirePromise" /* 6342 */;
import _mod6343 from "module_6343" /* 6343 */;
import _mod6344 from "module_6344" /* 6344 */;
import shimAllSettled from "shimAllSettled" /* 6419 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6371" /* 6371 */;

requirePromise();
let closure_0 = callBind(_mod6343());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6343;
obj.implementation = _mod6344;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;