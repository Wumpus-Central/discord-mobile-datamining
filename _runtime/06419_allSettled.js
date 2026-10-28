// _runtime/06419_allSettled.js
import requirePromise from "06420_requirePromise.js";
import _mod6421 from "metro/06421__.js";
import _mod6422 from "metro/06422__.js";
import shimAllSettled from "06497_shimAllSettled.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/06449__.js";

requirePromise();
let closure_0 = callBind(_mod6421());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6421;
obj.implementation = _mod6422;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
