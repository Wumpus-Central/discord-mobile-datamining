// _runtime/05277_allSettled.js
import requirePromise from "05278_requirePromise.js";
import _mod5279 from "metro/05279__.js";
import _mod5280 from "metro/05280__.js";
import shimAllSettled from "05355_shimAllSettled.js";
import callBind from "01456_callBind.js";
import defineProperty from "metro/05307__.js";

requirePromise();
let closure_0 = callBind(_mod5279());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod5279;
obj.implementation = _mod5280;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
