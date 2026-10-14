// _runtime/05728_shimAllSettled.js
import requirePromise from "05651_requirePromise.js";
import _mod5652 from "metro/05652__.js";
import _mod5680 from "metro/05680__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5652();
  closure_0 = tmp2;
  _mod5680(
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
