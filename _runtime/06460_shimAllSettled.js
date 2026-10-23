// _runtime/06460_shimAllSettled.js
import requirePromise from "06383_requirePromise.js";
import _mod6384 from "metro/06384__.js";
import _mod6412 from "metro/06412__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6384();
  closure_0 = tmp2;
  _mod6412(
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
