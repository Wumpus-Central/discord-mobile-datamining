// === Module 6497: shimAllSettled ===

// Module 6497 (shimAllSettled)
import requirePromise from "requirePromise" /* 6420 */;
import _mod6421 from "module_6421" /* 6421 */;
import _mod6449 from "module_6449" /* 6449 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6421();
  closure_0 = tmp2;
  _mod6449(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};