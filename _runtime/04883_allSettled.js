// === Module 4883: allSettled ===

// Module 4883 (allSettled)
import requirePromise from "requirePromise" /* 4884 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4886 from "module_4886" /* 4886 */;
import shimAllSettled from "shimAllSettled" /* 4961 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4913 */;

requirePromise();
let closure_0 = callBind(_mod4885());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4885;
obj.implementation = _mod4886;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;