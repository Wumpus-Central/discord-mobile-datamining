// === Module 5408: shimAllSettled ===

// Module 5408 (shimAllSettled)
import requirePromise from "requirePromise" /* 5331 */;
import getPolyfill from "getPolyfill" /* 5332 */;
import defineProperties from "defineProperties" /* 5360 */;


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