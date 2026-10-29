// === Module 6521: shimAllSettled ===

// Module 6521 (shimAllSettled)
import requirePromise from "requirePromise" /* 6444 */;
import _mod6445 from "module_6445" /* 6445 */;
import _mod6473 from "module_6473" /* 6473 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6445();
  closure_0 = tmp2;
  _mod6473(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};