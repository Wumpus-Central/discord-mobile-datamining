// _runtime/04583_allSettled.js
import callBind from "callBind";
import defineProperty from "defineProperty";

require("requirePromise")();
let closure_0 = callBind(require("getPolyfill")());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("allSettled");
obj[2] = require("shimAllSettled");
defineProperty(allSettled, obj);

export default allSettled;