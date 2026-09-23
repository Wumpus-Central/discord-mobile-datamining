// === Module 5161: shimAllSettled ===

// Module 5161 (shimAllSettled)
import requirePromise from "requirePromise" /* 5084 */;
import _mod5085 from "module_5085" /* 5085 */;
import _mod5113 from "module_5113" /* 5113 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5085();
  closure_0 = tmp2;
  _mod5113(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};