// _runtime/04883_allSettled.js
import requirePromise from "04884_requirePromise.js";
import _mod4885 from "metro/04885__.js";
import _mod4886 from "metro/04886__.js";
import shimAllSettled from "04961_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "04913_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4885());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4885;
obj.implementation = _mod4886;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
