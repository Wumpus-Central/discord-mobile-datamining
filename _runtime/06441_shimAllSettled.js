// === Module 6441: shimAllSettled ===

// Module 6441 (shimAllSettled)
import requirePromise from "requirePromise" /* 6364 */;
import _mod6365 from "module_6365" /* 6365 */;
import _mod6393 from "module_6393" /* 6393 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6365();
  closure_0 = tmp2;
  _mod6393(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};