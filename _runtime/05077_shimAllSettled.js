// === Module 5077: shimAllSettled ===

// Module 5077 (shimAllSettled)
import requirePromise from "requirePromise" /* 5000 */;
import _mod5001 from "module_5001" /* 5001 */;
import _mod5029 from "module_5029" /* 5029 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5001();
  closure_0 = tmp2;
  _mod5029(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};