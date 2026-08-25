// _runtime/04644_allSettled.js
import requirePromise from "04645_requirePromise.js";
import getPolyfill from "04646_getPolyfill.js";
import allSettled2 from "04647_allSettled.js";
import shimAllSettled from "04722_shimAllSettled.js";
import callBind from "01422_callBind.js";
import defineProperty from "04674_defineProperty.js";

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = allSettled2;
obj[2] = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;