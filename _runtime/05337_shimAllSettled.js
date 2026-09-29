// === Module 5337: shimAllSettled ===

// Module 5337 (shimAllSettled)
import requirePromise from "requirePromise" /* 5260 */;
import _mod5261 from "module_5261" /* 5261 */;
import _mod5289 from "module_5289" /* 5289 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5261();
  closure_0 = tmp2;
  _mod5289(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};