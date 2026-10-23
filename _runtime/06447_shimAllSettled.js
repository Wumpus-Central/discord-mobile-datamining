// === Module 6447: shimAllSettled ===

// Module 6447 (shimAllSettled)
import requirePromise from "requirePromise" /* 6370 */;
import _mod6371 from "module_6371" /* 6371 */;
import _mod6399 from "module_6399" /* 6399 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6371();
  closure_0 = tmp2;
  _mod6399(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};