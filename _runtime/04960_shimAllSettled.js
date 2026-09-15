// === Module 4960: shimAllSettled ===

// Module 4960 (shimAllSettled)
import requirePromise from "requirePromise" /* 4883 */;
import _mod4884 from "module_4884" /* 4884 */;
import defineProperty from "defineProperty" /* 4912 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4884();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};