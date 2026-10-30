// === Module 6528: shimAllSettled ===

// Module 6528 (shimAllSettled)
import requirePromise from "requirePromise" /* 6451 */;
import _mod6452 from "module_6452" /* 6452 */;
import _mod6480 from "module_6480" /* 6480 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6452();
  closure_0 = tmp2;
  _mod6480(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};