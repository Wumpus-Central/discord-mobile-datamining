// _runtime/05171_shimAllSettled.js
import requirePromise from "05094_requirePromise.js";
import _mod5095 from "metro/05095__.js";
import _mod5123 from "metro/05123__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5095();
  closure_0 = tmp2;
  _mod5123(
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
