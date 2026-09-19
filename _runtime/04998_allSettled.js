// === Module 4998: allSettled ===

// Module 4998 (allSettled)
import requirePromise from "requirePromise" /* 4999 */;
import _mod5000 from "module_5000" /* 5000 */;
import _mod5001 from "module_5001" /* 5001 */;
import shimAllSettled from "shimAllSettled" /* 5076 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5028" /* 5028 */;

requirePromise();
let closure_0 = callBind(_mod5000());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5000;
obj.implementation = _mod5001;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;