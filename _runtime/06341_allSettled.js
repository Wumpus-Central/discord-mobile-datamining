// _runtime/06341_allSettled.js
import requirePromise from "06342_requirePromise.js";
import _mod6343 from "metro/06343__.js";
import _mod6344 from "metro/06344__.js";
import shimAllSettled from "06419_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06371__.js";

requirePromise();
let closure_0 = callBind(_mod6343());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6343;
obj.implementation = _mod6344;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
