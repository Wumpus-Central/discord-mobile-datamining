// _runtime/04881_allSettled.js
import requirePromise from "04882_requirePromise.js";
import _mod4883 from "metro/04883__.js";
import _mod4884 from "metro/04884__.js";
import shimAllSettled from "04959_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "04911_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4883());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4883;
obj.implementation = _mod4884;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
