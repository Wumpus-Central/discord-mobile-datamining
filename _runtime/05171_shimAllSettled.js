// === Module 5171: shimAllSettled ===

// Module 5171 (shimAllSettled)
import requirePromise from "requirePromise" /* 5094 */;
import _mod5095 from "module_5095" /* 5095 */;
import _mod5123 from "module_5123" /* 5123 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5095();
  closure_0 = tmp2;
  _mod5123(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};