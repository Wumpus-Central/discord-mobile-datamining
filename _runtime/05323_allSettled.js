// === Module 5323: allSettled ===

// Module 5323 (allSettled)
import requirePromise from "requirePromise" /* 5324 */;
import getPolyfill from "getPolyfill" /* 5325 */;
import allSettled2 from "allSettled" /* 5326 */;
import shimAllSettled from "shimAllSettled" /* 5401 */;
import callBind from "callBind" /* 1461 */;
import defineProperties from "defineProperties" /* 5353 */;

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