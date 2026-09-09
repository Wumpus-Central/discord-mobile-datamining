// === Module 4895: shimAllSettled ===

// Module 4895 (shimAllSettled)
import requirePromise from "requirePromise" /* 4818 */;
import _mod4819 from "module_4819" /* 4819 */;
import defineProperty from "defineProperty" /* 4847 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4819();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};