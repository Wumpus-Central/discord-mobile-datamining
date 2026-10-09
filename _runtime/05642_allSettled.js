// _runtime/05642_allSettled.js
import requirePromise from "05643_requirePromise.js";
import _mod5644 from "metro/05644__.js";
import _mod5645 from "metro/05645__.js";
import shimAllSettled from "05720_shimAllSettled.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05672__.js";

requirePromise();
let closure_0 = callBind(_mod5644());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5644;
obj.implementation = _mod5645;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
