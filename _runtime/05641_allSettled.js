// _runtime/05641_allSettled.js
import requirePromise from "05642_requirePromise.js";
import _mod5643 from "metro/05643__.js";
import _mod5644 from "metro/05644__.js";
import shimAllSettled from "05719_shimAllSettled.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/05671__.js";

requirePromise();
let closure_0 = callBind(_mod5643());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5643;
obj.implementation = _mod5644;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
