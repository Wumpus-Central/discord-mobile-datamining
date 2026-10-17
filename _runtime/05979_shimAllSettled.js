// === Module 5979: shimAllSettled ===

// Module 5979 (shimAllSettled)
import requirePromise from "requirePromise" /* 5902 */;
import _mod5903 from "module_5903" /* 5903 */;
import _mod5931 from "module_5931" /* 5931 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5903();
  closure_0 = tmp2;
  _mod5931(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};