// === Module 5085: allSettled ===

// Module 5085 (allSettled)
import requirePromise from "requirePromise" /* 5086 */;
import _mod5087 from "module_5087" /* 5087 */;
import _mod5088 from "module_5088" /* 5088 */;
import shimAllSettled from "shimAllSettled" /* 5163 */;
import callBind from "callBind" /* 1455 */;
import defineProperty from "module_5115" /* 5115 */;

requirePromise();
let closure_0 = callBind(_mod5087());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5087;
obj.implementation = _mod5088;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;