// === Module 6460: shimAllSettled ===

// Module 6460 (shimAllSettled)
import requirePromise from "requirePromise" /* 6383 */;
import _mod6384 from "module_6384" /* 6384 */;
import _mod6412 from "module_6412" /* 6412 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6384();
  closure_0 = tmp2;
  _mod6412(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};