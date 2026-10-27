// === Module 6463: shimAllSettled ===

// Module 6463 (shimAllSettled)
import requirePromise from "requirePromise" /* 6386 */;
import _mod6387 from "module_6387" /* 6387 */;
import _mod6415 from "module_6415" /* 6415 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6387();
  closure_0 = tmp2;
  _mod6415(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};