// _runtime/05337_shimAllSettled.js
import requirePromise from "05260_requirePromise.js";
import _mod5261 from "metro/05261__.js";
import _mod5289 from "metro/05289__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5261();
  closure_0 = tmp2;
  _mod5289(
    Promise,
    { allSettled: tmp2 },
    {
      allSettled: function testAllSettled() {
        return Promise.allSettled !== closure_0;
      },
    },
  );
  return tmp2;
}
