// _runtime/04879_allSettled.js
import requirePromise from "04880_requirePromise.js";
import _mod4881 from "metro/04881__.js";
import _mod4882 from "metro/04882__.js";
import shimAllSettled from "04957_shimAllSettled.js";
import callBind from "01454_callBind.js";
import defineProperty from "04909_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4881());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4881;
obj.implementation = _mod4882;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
