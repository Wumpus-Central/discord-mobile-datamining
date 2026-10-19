// === Module 6416: shimAllSettled ===

// Module 6416 (shimAllSettled)
import requirePromise from "requirePromise" /* 6339 */;
import _mod6340 from "module_6340" /* 6340 */;
import _mod6368 from "module_6368" /* 6368 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6340();
  closure_0 = tmp2;
  _mod6368(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};