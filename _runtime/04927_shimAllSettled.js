// === Module 4927: shimAllSettled ===

// Module 4927 (shimAllSettled)
import requirePromise from "requirePromise" /* 4850 */;
import _mod4851 from "module_4851" /* 4851 */;
import defineProperty from "defineProperty" /* 4879 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4851();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};