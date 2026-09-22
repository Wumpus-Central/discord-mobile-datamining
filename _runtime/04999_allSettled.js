// === Module 4999: allSettled ===

// Module 4999 (allSettled)
import requirePromise from "requirePromise" /* 5000 */;
import _mod5001 from "module_5001" /* 5001 */;
import _mod5002 from "module_5002" /* 5002 */;
import shimAllSettled from "shimAllSettled" /* 5077 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5029" /* 5029 */;

requirePromise();
let closure_0 = callBind(_mod5001());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5001;
obj.implementation = _mod5002;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;