// === Module 5861: allSettled ===

// Module 5861 (allSettled)
import requirePromise from "requirePromise" /* 5862 */;
import _mod5863 from "module_5863" /* 5863 */;
import _mod5864 from "module_5864" /* 5864 */;
import shimAllSettled from "shimAllSettled" /* 5939 */;
import callBind from "callBind" /* 1474 */;
import defineProperty from "module_5891" /* 5891 */;

requirePromise();
let closure_0 = callBind(_mod5863());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5863;
obj.implementation = _mod5864;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;