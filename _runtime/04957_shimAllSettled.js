// === Module 4957: shimAllSettled ===

// Module 4957 (shimAllSettled)
import requirePromise from "requirePromise" /* 4880 */;
import _mod4881 from "module_4881" /* 4881 */;
import defineProperty from "defineProperty" /* 4909 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4881();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};