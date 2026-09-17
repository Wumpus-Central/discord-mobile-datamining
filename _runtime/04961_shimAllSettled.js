// === Module 4961: shimAllSettled ===

// Module 4961 (shimAllSettled)
import requirePromise from "requirePromise" /* 4884 */;
import _mod4885 from "module_4885" /* 4885 */;
import defineProperty from "defineProperty" /* 4913 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4885();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};