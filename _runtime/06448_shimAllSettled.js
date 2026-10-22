// _runtime/06448_shimAllSettled.js
import requirePromise from "06371_requirePromise.js";
import _mod6372 from "metro/06372__.js";
import _mod6400 from "metro/06400__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6372();
  closure_0 = tmp2;
  _mod6400(
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
