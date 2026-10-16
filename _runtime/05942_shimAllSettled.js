// === Module 5942: shimAllSettled ===

// Module 5942 (shimAllSettled)
import requirePromise from "requirePromise" /* 5865 */;
import _mod5866 from "module_5866" /* 5866 */;
import _mod5894 from "module_5894" /* 5894 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5866();
  closure_0 = tmp2;
  _mod5894(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};