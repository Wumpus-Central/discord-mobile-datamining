// === Module 5355: shimAllSettled ===

// Module 5355 (shimAllSettled)
import requirePromise from "requirePromise" /* 5278 */;
import _mod5279 from "module_5279" /* 5279 */;
import _mod5307 from "module_5307" /* 5307 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5279();
  closure_0 = tmp2;
  _mod5307(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};