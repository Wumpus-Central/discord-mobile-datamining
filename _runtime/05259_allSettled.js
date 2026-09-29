// === Module 5259: allSettled ===

// Module 5259 (allSettled)
import requirePromise from "requirePromise" /* 5260 */;
import _mod5261 from "module_5261" /* 5261 */;
import _mod5262 from "module_5262" /* 5262 */;
import shimAllSettled from "shimAllSettled" /* 5337 */;
import callBind from "callBind" /* 1456 */;
import defineProperty from "module_5289" /* 5289 */;

requirePromise();
let closure_0 = callBind(_mod5261());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5261;
obj.implementation = _mod5262;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;