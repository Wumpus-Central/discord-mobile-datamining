// _runtime/04618_shimAllSettled.js
import { requirePromise } from "04541_requirePromise.js";
import { getPolyfill } from "04542_getPolyfill.js";
import { defineProperty } from "04570_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  require = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};