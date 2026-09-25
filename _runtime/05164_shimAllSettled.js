// _runtime/05164_shimAllSettled.js
import requirePromise from "05087_requirePromise.js";
import _mod5088 from "metro/05088__.js";
import _mod5116 from "metro/05116__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5088();
  closure_0 = tmp2;
  _mod5116(
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
