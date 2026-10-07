// _runtime/05330_allSettled.js
import requirePromise from "05331_requirePromise.js";
import _mod5332 from "metro/05332__.js";
import _mod5333 from "metro/05333__.js";
import shimAllSettled from "05408_shimAllSettled.js";
import callBind from "01461_callBind.js";
import defineProperty from "metro/05360__.js";

requirePromise();
let closure_0 = callBind(_mod5332());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5332;
obj.implementation = _mod5333;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
