// _runtime/06338_allSettled.js
import requirePromise from "06339_requirePromise.js";
import _mod6340 from "metro/06340__.js";
import _mod6341 from "metro/06341__.js";
import shimAllSettled from "06416_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06368__.js";

requirePromise();
let closure_0 = callBind(_mod6340());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6340;
obj.implementation = _mod6341;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
