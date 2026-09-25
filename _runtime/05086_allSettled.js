// _runtime/05086_allSettled.js
import requirePromise from "05087_requirePromise.js";
import _mod5088 from "metro/05088__.js";
import _mod5089 from "metro/05089__.js";
import shimAllSettled from "05164_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05116__.js";

requirePromise();
let closure_0 = callBind(_mod5088());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5088;
obj.implementation = _mod5089;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
