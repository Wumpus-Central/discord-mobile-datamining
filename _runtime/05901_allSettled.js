// _runtime/05901_allSettled.js
import requirePromise from "05902_requirePromise.js";
import _mod5903 from "metro/05903__.js";
import _mod5904 from "metro/05904__.js";
import shimAllSettled from "05979_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05931__.js";

requirePromise();
let closure_0 = callBind(_mod5903());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5903;
obj.implementation = _mod5904;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
