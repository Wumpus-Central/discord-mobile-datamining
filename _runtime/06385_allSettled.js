// _runtime/06385_allSettled.js
import requirePromise from "06386_requirePromise.js";
import _mod6387 from "metro/06387__.js";
import _mod6388 from "metro/06388__.js";
import shimAllSettled from "06463_shimAllSettled.js";
import callBind from "01473_callBind.js";
import defineProperty from "metro/06415__.js";

requirePromise();
let closure_0 = callBind(_mod6387());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6387;
obj.implementation = _mod6388;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
