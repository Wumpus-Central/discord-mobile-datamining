// _runtime/04849_allSettled.js
import requirePromise from "04850_requirePromise.js";
import _mod4851 from "metro/04851__.js";
import _mod4852 from "metro/04852__.js";
import shimAllSettled from "04927_shimAllSettled.js";
import callBind from "01454_callBind.js";
import defineProperty from "04879_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4851());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4851;
obj.implementation = _mod4852;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
