// _runtime/04817_allSettled.js
import requirePromise from "04818_requirePromise.js";
import _mod4819 from "metro/04819__.js";
import _mod4820 from "metro/04820__.js";
import shimAllSettled from "04895_shimAllSettled.js";
import callBind from "01454_callBind.js";
import defineProperty from "04847_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4819());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4819;
obj.implementation = _mod4820;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
