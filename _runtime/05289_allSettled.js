// _runtime/05289_allSettled.js
import requirePromise from "05290_requirePromise.js";
import _mod5291 from "metro/05291__.js";
import _mod5292 from "metro/05292__.js";
import shimAllSettled from "05367_shimAllSettled.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05319__.js";

requirePromise();
let closure_0 = callBind(_mod5291());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5291;
obj.implementation = _mod5292;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
