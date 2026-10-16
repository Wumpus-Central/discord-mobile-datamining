// _runtime/05864_allSettled.js
import requirePromise from "05865_requirePromise.js";
import _mod5866 from "metro/05866__.js";
import _mod5867 from "metro/05867__.js";
import shimAllSettled from "05942_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05894__.js";

requirePromise();
let closure_0 = callBind(_mod5866());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5866;
obj.implementation = _mod5867;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
