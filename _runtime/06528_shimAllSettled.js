// _runtime/06528_shimAllSettled.js
import requirePromise from "06451_requirePromise.js";
import _mod6452 from "metro/06452__.js";
import _mod6480 from "metro/06480__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6452();
  closure_0 = tmp2;
  _mod6480(
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
