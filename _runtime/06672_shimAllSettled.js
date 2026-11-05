// === Module 6672: shimAllSettled ===

// Module 6672 (shimAllSettled)
import requirePromise from "requirePromise" /* 6595 */;
import _mod6596 from "module_6596" /* 6596 */;
import _mod6624 from "module_6624" /* 6624 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6596();
  closure_0 = tmp2;
  _mod6624(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};