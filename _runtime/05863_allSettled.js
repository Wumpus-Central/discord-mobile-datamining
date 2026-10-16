// === Module 5863: allSettled ===

// Module 5863 (allSettled)
import requirePromise from "requirePromise" /* 5864 */;
import _mod5865 from "module_5865" /* 5865 */;
import _mod5866 from "module_5866" /* 5866 */;
import shimAllSettled from "shimAllSettled" /* 5941 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5893" /* 5893 */;

requirePromise();
let closure_0 = callBind(_mod5865());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5865;
obj.implementation = _mod5866;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;