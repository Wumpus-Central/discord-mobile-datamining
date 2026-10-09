// === Module 5720: shimAllSettled ===

// Module 5720 (shimAllSettled)
import requirePromise from "requirePromise" /* 5643 */;
import _mod5644 from "module_5644" /* 5644 */;
import _mod5672 from "module_5672" /* 5672 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5644();
  closure_0 = tmp2;
  _mod5672(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};