// === Module 4817: allSettled ===

// Module 4817 (allSettled)
import requirePromise from "requirePromise" /* 4818 */;
import _mod4819 from "module_4819" /* 4819 */;
import _mod4820 from "module_4820" /* 4820 */;
import shimAllSettled from "shimAllSettled" /* 4895 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4847 */;

requirePromise();
let closure_0 = callBind(_mod4819());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4819;
obj.implementation = _mod4820;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;