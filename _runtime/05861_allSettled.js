// _runtime/05861_allSettled.js
import requirePromise from "05862_requirePromise.js";
import _mod5863 from "metro/05863__.js";
import _mod5864 from "metro/05864__.js";
import shimAllSettled from "05939_shimAllSettled.js";
import callBind from "01474_callBind.js";
import defineProperty from "metro/05891__.js";

requirePromise();
let closure_0 = callBind(_mod5863());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5863;
obj.implementation = _mod5864;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
