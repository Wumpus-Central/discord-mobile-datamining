// === Module 5408: shimAllSettled ===

// Module 5408 (shimAllSettled)
import requirePromise from "requirePromise" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5360 from "module_5360" /* 5360 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5332();
  closure_0 = tmp2;
  _mod5360(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};