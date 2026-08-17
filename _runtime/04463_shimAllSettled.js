// _runtime/04463_shimAllSettled.js
import { requirePromise } from "04386_requirePromise.js";
import { getPolyfill } from "04387_getPolyfill.js";
import { defineProperty } from "04415_defineProperty.js";

export default function shimAllSettled() {
  _requirePromise();
  const tmp2 = _getPolyfill();
  _require = tmp2;
  _defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};