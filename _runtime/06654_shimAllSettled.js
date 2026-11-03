// === Module 6654: shimAllSettled ===

// Module 6654 (shimAllSettled)
import requirePromise from "requirePromise" /* 6577 */;
import _mod6578 from "module_6578" /* 6578 */;
import _mod6606 from "module_6606" /* 6606 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6578();
  closure_0 = tmp2;
  _mod6606(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};