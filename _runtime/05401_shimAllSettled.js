// === Module 5401: shimAllSettled ===

// Module 5401 (shimAllSettled)
import requirePromise from "requirePromise" /* 5324 */;
import _mod5325 from "module_5325" /* 5325 */;
import _mod5353 from "module_5353" /* 5353 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5325();
  closure_0 = tmp2;
  _mod5353(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};