// === Module 4959: shimAllSettled ===

// Module 4959 (shimAllSettled)
import requirePromise from "requirePromise" /* 4882 */;
import _mod4883 from "module_4883" /* 4883 */;
import defineProperty from "defineProperty" /* 4911 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4883();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};