// === Module 4926: shimAllSettled ===

// Module 4926 (shimAllSettled)
import requirePromise from "requirePromise" /* 4849 */;
import _mod4850 from "module_4850" /* 4850 */;
import defineProperty from "defineProperty" /* 4878 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4850();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};