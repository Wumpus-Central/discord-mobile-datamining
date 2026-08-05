import { requirePromise } from "04524_requirePromise.js";
import { getPolyfill } from "04525_getPolyfill.js";
import { defineProperty } from "04553_defineProperty.js";
// _runtime/04601_shimAllSettled.js

export default function shimAllSettled() {
  requirePromise /* requirePromise */();
  const tmp2 = getPolyfill /* getPolyfill */();
  require = tmp2;
  defineProperty /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};