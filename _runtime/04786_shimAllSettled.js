// _runtime/04786_shimAllSettled.js
import { requirePromise } from "04709_requirePromise.js";
import { getPolyfill } from "04710_getPolyfill.js";
import { defineProperty } from "04738_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  _require = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};