// _runtime/05259_allSettled.js
import requirePromise from "05260_requirePromise.js";
import _mod5261 from "metro/05261__.js";
import _mod5262 from "metro/05262__.js";
import shimAllSettled from "05337_shimAllSettled.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05289__.js";

requirePromise();
let closure_0 = callBind(_mod5261());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5261;
obj.implementation = _mod5262;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
