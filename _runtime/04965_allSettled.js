// _runtime/04965_allSettled.js
import requirePromise from "04966_requirePromise.js";
import _mod4967 from "metro/04967__.js";
import _mod4968 from "metro/04968__.js";
import shimAllSettled from "05043_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/04995__.js";

requirePromise();
let closure_0 = callBind(_mod4967());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4967;
obj.implementation = _mod4968;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
