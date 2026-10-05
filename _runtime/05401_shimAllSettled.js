// _runtime/05401_shimAllSettled.js
import requirePromise from "05324_requirePromise.js";
import getPolyfill from "05325_getPolyfill.js";
import defineProperties from "05353_defineProperties.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  let closure_0 = tmp2;
  const obj = {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    },
  };
  defineProperties(Promise, { allSettled: tmp2 }, obj);
  return tmp2;
}
