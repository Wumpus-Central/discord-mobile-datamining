// _runtime/05650_allSettled.js
import requirePromise from "05651_requirePromise.js";
import _mod5652 from "metro/05652__.js";
import _mod5653 from "metro/05653__.js";
import shimAllSettled from "05728_shimAllSettled.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05680__.js";

requirePromise();
let closure_0 = callBind(_mod5652());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5652;
obj.implementation = _mod5653;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
