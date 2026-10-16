// === Module 5941: shimAllSettled ===

// Module 5941 (shimAllSettled)
import requirePromise from "requirePromise" /* 5864 */;
import _mod5865 from "module_5865" /* 5865 */;
import _mod5893 from "module_5893" /* 5893 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5865();
  closure_0 = tmp2;
  _mod5893(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};