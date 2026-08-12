// _runtime/04660_shimAllSettled.js
import { requirePromise } from "04583_requirePromise.js";
import { getPolyfill } from "04584_getPolyfill.js";
import { defineProperty } from "04612_defineProperty.js";

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