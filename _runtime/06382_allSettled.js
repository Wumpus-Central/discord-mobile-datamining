// _runtime/06382_allSettled.js
import requirePromise from "06383_requirePromise.js";
import _mod6384 from "metro/06384__.js";
import _mod6385 from "metro/06385__.js";
import shimAllSettled from "06460_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/06412__.js";

requirePromise();
let closure_0 = callBind(_mod6384());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod6384;
obj.implementation = _mod6385;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
