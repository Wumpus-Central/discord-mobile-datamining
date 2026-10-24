// === Module 6462: shimAllSettled ===

// Module 6462 (shimAllSettled)
import requirePromise from "requirePromise" /* 6385 */;
import _mod6386 from "module_6386" /* 6386 */;
import _mod6414 from "module_6414" /* 6414 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6386();
  closure_0 = tmp2;
  _mod6414(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};