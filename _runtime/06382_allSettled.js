// === Module 6382: allSettled ===

// Module 6382 (allSettled)
import requirePromise from "requirePromise" /* 6383 */;
import _mod6384 from "module_6384" /* 6384 */;
import _mod6385 from "module_6385" /* 6385 */;
import shimAllSettled from "shimAllSettled" /* 6460 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_6412" /* 6412 */;

requirePromise();
let closure_0 = callBind(_mod6384());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6384;
obj.implementation = _mod6385;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;