// _runtime/05083_allSettled.js
import requirePromise from "05084_requirePromise.js";
import _mod5085 from "metro/05085__.js";
import _mod5086 from "metro/05086__.js";
import shimAllSettled from "05161_shimAllSettled.js";
import callBind from "01455_callBind.js";
import defineProperty from "metro/05113__.js";

requirePromise();
let closure_0 = callBind(_mod5085());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5085;
obj.implementation = _mod5086;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
