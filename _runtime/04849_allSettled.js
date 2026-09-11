// === Module 4849: allSettled ===

// Module 4849 (allSettled)
import requirePromise from "requirePromise" /* 4850 */;
import _mod4851 from "module_4851" /* 4851 */;
import _mod4852 from "module_4852" /* 4852 */;
import shimAllSettled from "shimAllSettled" /* 4927 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4879 */;

requirePromise();
let closure_0 = callBind(_mod4851());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4851;
obj.implementation = _mod4852;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;