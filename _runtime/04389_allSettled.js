// === Module 4389: allSettled ===

// Module 4389 (allSettled)
import requirePromise from "requirePromise" /* 4390 */;
import getPolyfill from "getPolyfill" /* 4391 */;
import allSettled2 from "allSettled" /* 4392 */;
import shimAllSettled from "shimAllSettled" /* 4467 */;
import callBind from "callBind" /* 1422 */;
import defineProperty from "defineProperty" /* 4419 */;

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