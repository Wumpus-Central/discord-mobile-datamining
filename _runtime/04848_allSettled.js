// _runtime/04848_allSettled.js
import requirePromise from "04849_requirePromise.js";
import _mod4850 from "metro/04850__.js";
import _mod4851 from "metro/04851__.js";
import shimAllSettled from "04926_shimAllSettled.js";
import callBind from "01454_callBind.js";
import defineProperty from "04878_defineProperty.js";

requirePromise();
let closure_0 = callBind(_mod4850());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4850;
obj.implementation = _mod4851;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
