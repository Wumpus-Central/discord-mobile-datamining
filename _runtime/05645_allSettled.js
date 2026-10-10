// _runtime/05645_allSettled.js
import requirePromise from "05646_requirePromise.js";
import _mod5647 from "metro/05647__.js";
import _mod5648 from "metro/05648__.js";
import shimAllSettled from "05723_shimAllSettled.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05675__.js";

requirePromise();
let closure_0 = callBind(_mod5647());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5647;
obj.implementation = _mod5648;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
