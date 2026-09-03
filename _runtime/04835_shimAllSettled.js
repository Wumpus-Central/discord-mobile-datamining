// _runtime/04835_shimAllSettled.js
import { requirePromise } from "04758_requirePromise.js";
import { getPolyfill } from "04759_getPolyfill.js";
import { defineProperty } from "04787_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  _require = tmp2;
  defineProperty(
    Promise,
    { allSettled: tmp2 },
    {
      allSettled: function testAllSettled() {
        return Promise.allSettled !== closure_0;
      },
    },
  );
  return tmp2;
}
