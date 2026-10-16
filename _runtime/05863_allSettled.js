// _runtime/05863_allSettled.js
import requirePromise from "05864_requirePromise.js";
import _mod5865 from "metro/05865__.js";
import _mod5866 from "metro/05866__.js";
import shimAllSettled from "05941_shimAllSettled.js";
import callBind from "01476_callBind.js";
import defineProperty from "metro/05893__.js";

requirePromise();
let closure_0 = callBind(_mod5865());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5865;
obj.implementation = _mod5866;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
