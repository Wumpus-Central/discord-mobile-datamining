// _runtime/04385_allSettled.js
import requirePromise from "04386_requirePromise.js";
import getPolyfill from "04387_getPolyfill.js";
import allSettled2 from "04388_allSettled.js";
import shimAllSettled from "04463_shimAllSettled.js";
import callBind from "01422_callBind.js";
import defineProperty from "04415_defineProperty.js";

requirePromise();
let closure_0 = callBind(getPolyfill());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return callback(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = allSettled2;
obj[2] = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;