// === Module 5401: shimAllSettled ===

// Module 5401 (shimAllSettled)
import requirePromise from "requirePromise" /* 5324 */;
import getPolyfill from "getPolyfill" /* 5325 */;
import defineProperties from "defineProperties" /* 5353 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  let closure_0 = tmp2;
  const obj = {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  };
  defineProperties(Promise, { allSettled: tmp2 }, obj);
  return tmp2;
};