// _runtime/04882_allSettled.js
import requirePromise from "04883_requirePromise.js";
import _mod4884 from "metro/04884__.js";
import _mod4885 from "metro/04885__.js";
import shimAllSettled from "04960_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "04912_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4884());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4884;
obj.implementation = _mod4885;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
