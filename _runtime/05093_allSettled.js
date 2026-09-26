// === Module 5093: allSettled ===

// Module 5093 (allSettled)
import requirePromise from "requirePromise" /* 5094 */;
import _mod5095 from "module_5095" /* 5095 */;
import _mod5096 from "module_5096" /* 5096 */;
import shimAllSettled from "shimAllSettled" /* 5171 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5123" /* 5123 */;

requirePromise();
let closure_0 = callBind(_mod5095());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5095;
obj.implementation = _mod5096;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;