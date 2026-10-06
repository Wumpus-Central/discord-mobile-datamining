// _runtime/05330_allSettled.js
import requirePromise from "05331_requirePromise.js";
import getPolyfill from "05332_getPolyfill.js";
import allSettled2 from "05333_allSettled.js";
import shimAllSettled from "05408_shimAllSettled.js";
import callBind from "01461_callBind.js";
import defineProperties from "05360_defineProperties.js";

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill, implementation: allSettled2, shim: shimAllSettled };
defineProperties(allSettled, obj);

export default allSettled;
