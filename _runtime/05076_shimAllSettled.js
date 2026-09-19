// === Module 5076: shimAllSettled ===

// Module 5076 (shimAllSettled)
import requirePromise from "requirePromise" /* 4999 */;
import _mod5000 from "module_5000" /* 5000 */;
import _mod5028 from "module_5028" /* 5028 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5000();
  closure_0 = tmp2;
  _mod5028(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};