// === Module 5719: shimAllSettled ===

// Module 5719 (shimAllSettled)
import requirePromise from "requirePromise" /* 5642 */;
import _mod5643 from "module_5643" /* 5643 */;
import _mod5671 from "module_5671" /* 5671 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5643();
  closure_0 = tmp2;
  _mod5671(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};