// === Module 5723: shimAllSettled ===

// Module 5723 (shimAllSettled)
import requirePromise from "requirePromise" /* 5646 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5675 from "module_5675" /* 5675 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5647();
  closure_0 = tmp2;
  _mod5675(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};