// === Module 6534: shimAllSettled ===

// Module 6534 (shimAllSettled)
import requirePromise from "requirePromise" /* 6457 */;
import _mod6458 from "module_6458" /* 6458 */;
import _mod6486 from "module_6486" /* 6486 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6458();
  closure_0 = tmp2;
  _mod6486(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};