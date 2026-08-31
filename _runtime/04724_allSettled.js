// _runtime/04724_allSettled.js
import requirePromise from "04725_requirePromise.js";
import getPolyfill from "04726_getPolyfill.js";
import allSettled2 from "04727_allSettled.js";
import shimAllSettled from "04802_shimAllSettled.js";
import callBind from "01418_callBind.js";
import defineProperty from "04754_defineProperty.js";

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