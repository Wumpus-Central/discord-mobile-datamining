// _runtime/04803_allSettled.js
import requirePromise from "04804_requirePromise.js";
import _mod4805 from "metro/04805__.js";
import _mod4806 from "metro/04806__.js";
import shimAllSettled from "04881_shimAllSettled.js";
import callBind from "01454_callBind.js";
import defineProperty from "04833_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4805());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4805;
obj.implementation = _mod4806;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
