// === Module 5163: shimAllSettled ===

// Module 5163 (shimAllSettled)
import requirePromise from "requirePromise" /* 5086 */;
import _mod5087 from "module_5087" /* 5087 */;
import _mod5115 from "module_5115" /* 5115 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5087();
  closure_0 = tmp2;
  _mod5115(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};