// === Module 6448: shimAllSettled ===

// Module 6448 (shimAllSettled)
import requirePromise from "requirePromise" /* 6371 */;
import _mod6372 from "module_6372" /* 6372 */;
import _mod6400 from "module_6400" /* 6400 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6372();
  closure_0 = tmp2;
  _mod6400(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};