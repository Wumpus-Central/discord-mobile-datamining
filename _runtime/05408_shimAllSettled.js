// _runtime/05408_shimAllSettled.js
import requirePromise from "05331_requirePromise.js";
import _mod5332 from "metro/05332__.js";
import _mod5360 from "metro/05360__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5332();
  closure_0 = tmp2;
  _mod5360(
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
