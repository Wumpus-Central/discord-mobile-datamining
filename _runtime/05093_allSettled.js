// _runtime/05093_allSettled.js
import requirePromise from "05094_requirePromise.js";
import _mod5095 from "metro/05095__.js";
import _mod5096 from "metro/05096__.js";
import shimAllSettled from "05171_shimAllSettled.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05123__.js";

requirePromise();
let closure_0 = callBind(_mod5095());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5095;
obj.implementation = _mod5096;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
