// _runtime/04571_shimAllSettled.js
import { requirePromise } from "04494_requirePromise.js";
import { getPolyfill } from "04495_getPolyfill.js";
import { defineProperty } from "04523_defineProperty.js";

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