// _runtime/05367_shimAllSettled.js
import requirePromise from "05290_requirePromise.js";
import _mod5291 from "metro/05291__.js";
import _mod5319 from "metro/05319__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5291();
  closure_0 = tmp2;
  _mod5319(
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
