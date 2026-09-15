// === Module 4882: allSettled ===

// Module 4882 (allSettled)
import requirePromise from "requirePromise" /* 4883 */;
import _mod4884 from "module_4884" /* 4884 */;
import _mod4885 from "module_4885" /* 4885 */;
import shimAllSettled from "shimAllSettled" /* 4960 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4912 */;

requirePromise();
let closure_0 = callBind(_mod4884());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4884;
obj.implementation = _mod4885;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;