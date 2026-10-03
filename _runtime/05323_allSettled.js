// _runtime/05323_allSettled.js
import requirePromise from "05324_requirePromise.js";
import _mod5325 from "metro/05325__.js";
import _mod5326 from "metro/05326__.js";
import shimAllSettled from "05401_shimAllSettled.js";
import callBind from "01461_callBind.js";
import defineProperty from "metro/05353__.js";

requirePromise();
let closure_0 = callBind(_mod5325());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5325;
obj.implementation = _mod5326;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
