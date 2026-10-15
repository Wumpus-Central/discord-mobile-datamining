// === Module 5939: shimAllSettled ===

// Module 5939 (shimAllSettled)
import requirePromise from "requirePromise" /* 5862 */;
import _mod5863 from "module_5863" /* 5863 */;
import _mod5891 from "module_5891" /* 5891 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5863();
  closure_0 = tmp2;
  _mod5891(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};