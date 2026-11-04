// === Module 6669: shimAllSettled ===

// Module 6669 (shimAllSettled)
import requirePromise from "requirePromise" /* 6592 */;
import _mod6593 from "module_6593" /* 6593 */;
import _mod6621 from "module_6621" /* 6621 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6593();
  closure_0 = tmp2;
  _mod6621(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};