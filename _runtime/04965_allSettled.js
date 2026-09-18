// === Module 4965: allSettled ===

// Module 4965 (allSettled)
import requirePromise from "requirePromise" /* 4966 */;
import _mod4967 from "module_4967" /* 4967 */;
import _mod4968 from "module_4968" /* 4968 */;
import shimAllSettled from "shimAllSettled" /* 5043 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_4995" /* 4995 */;

requirePromise();
let closure_0 = callBind(_mod4967());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4967;
obj.implementation = _mod4968;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;