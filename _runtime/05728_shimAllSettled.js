// === Module 5728: shimAllSettled ===

// Module 5728 (shimAllSettled)
import requirePromise from "requirePromise" /* 5651 */;
import _mod5652 from "module_5652" /* 5652 */;
import _mod5680 from "module_5680" /* 5680 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5652();
  closure_0 = tmp2;
  _mod5680(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};