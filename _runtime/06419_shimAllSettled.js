// === Module 6419: shimAllSettled ===

// Module 6419 (shimAllSettled)
import requirePromise from "requirePromise" /* 6342 */;
import _mod6343 from "module_6343" /* 6343 */;
import _mod6371 from "module_6371" /* 6371 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6343();
  closure_0 = tmp2;
  _mod6371(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};