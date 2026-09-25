// === Module 5164: shimAllSettled ===

// Module 5164 (shimAllSettled)
import requirePromise from "requirePromise" /* 5087 */;
import _mod5088 from "module_5088" /* 5088 */;
import _mod5116 from "module_5116" /* 5116 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5088();
  closure_0 = tmp2;
  _mod5116(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};