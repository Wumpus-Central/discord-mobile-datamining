// === Module 4881: allSettled ===

// Module 4881 (allSettled)
import requirePromise from "requirePromise" /* 4882 */;
import _mod4883 from "module_4883" /* 4883 */;
import _mod4884 from "module_4884" /* 4884 */;
import shimAllSettled from "shimAllSettled" /* 4959 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "defineProperty" /* 4911 */;

requirePromise();
let closure_0 = callBind(_mod4883());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4883;
obj.implementation = _mod4884;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;