// === Module 5330: allSettled ===

// Module 5330 (allSettled)
import requirePromise from "requirePromise" /* 5331 */;
import getPolyfill from "getPolyfill" /* 5332 */;
import allSettled2 from "allSettled" /* 5333 */;
import shimAllSettled from "shimAllSettled" /* 5408 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5360 */;

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill, implementation: allSettled2, shim: shimAllSettled };
defineProperties(allSettled, obj);

export default allSettled;