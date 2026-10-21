// _runtime/06363_allSettled.js
import requirePromise from "06364_requirePromise.js";
import _mod6365 from "metro/06365__.js";
import _mod6366 from "metro/06366__.js";
import shimAllSettled from "06441_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06393__.js";

requirePromise();
let closure_0 = callBind(_mod6365());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6365;
obj.implementation = _mod6366;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
