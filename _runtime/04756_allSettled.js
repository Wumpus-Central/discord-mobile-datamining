// === Module 4756: allSettled ===

// Module 4756 (allSettled)
import requirePromise from "requirePromise" /* 4757 */;
import getPolyfill from "getPolyfill" /* 4758 */;
import allSettled2 from "allSettled" /* 4759 */;
import shimAllSettled from "shimAllSettled" /* 4834 */;
import callBind from "callBind" /* 1417 */;
import defineProperty from "defineProperty" /* 4786 */;

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = allSettled2;
obj[2] = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;