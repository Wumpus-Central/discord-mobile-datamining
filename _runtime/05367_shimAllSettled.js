// === Module 5367: shimAllSettled ===

// Module 5367 (shimAllSettled)
import requirePromise from "requirePromise" /* 5290 */;
import _mod5291 from "module_5291" /* 5291 */;
import _mod5319 from "module_5319" /* 5319 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5291();
  closure_0 = tmp2;
  _mod5319(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};