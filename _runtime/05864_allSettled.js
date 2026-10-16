// === Module 5864: allSettled ===

// Module 5864 (allSettled)
import requirePromise from "requirePromise" /* 5865 */;
import _mod5866 from "module_5866" /* 5866 */;
import _mod5867 from "module_5867" /* 5867 */;
import shimAllSettled from "shimAllSettled" /* 5942 */;
import callBind from "callBind" /* 1476 */;
import defineProperty from "module_5894" /* 5894 */;

requirePromise();
let closure_0 = callBind(_mod5866());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5866;
obj.implementation = _mod5867;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;