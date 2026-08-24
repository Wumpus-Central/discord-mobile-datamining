// === Module 4385: allSettled ===

// Module 4385 (allSettled)
import requirePromise from "requirePromise" /* 4386 */;
import getPolyfill from "getPolyfill" /* 4387 */;
import allSettled2 from "allSettled" /* 4388 */;
import shimAllSettled from "shimAllSettled" /* 4463 */;
import callBind from "callBind" /* 1422 */;
import defineProperty from "defineProperty" /* 4415 */;

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