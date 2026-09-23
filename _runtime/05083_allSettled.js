// === Module 5083: allSettled ===

// Module 5083 (allSettled)
import requirePromise from "requirePromise" /* 5084 */;
import _mod5085 from "module_5085" /* 5085 */;
import _mod5086 from "module_5086" /* 5086 */;
import shimAllSettled from "shimAllSettled" /* 5161 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5113" /* 5113 */;

requirePromise();
let closure_0 = callBind(_mod5085());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5085;
obj.implementation = _mod5086;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;