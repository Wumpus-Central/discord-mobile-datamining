// === Module 5323: allSettled ===

// Module 5323 (allSettled)
import requirePromise from "requirePromise" /* 5324 */;
import _mod5325 from "module_5325" /* 5325 */;
import _mod5326 from "module_5326" /* 5326 */;
import shimAllSettled from "shimAllSettled" /* 5401 */;
import callBind from "callBind" /* 1461 */;
import defineProperty from "module_5353" /* 5353 */;

requirePromise();
let closure_0 = callBind(_mod5325());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5325;
obj.implementation = _mod5326;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;